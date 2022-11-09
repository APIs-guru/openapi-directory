import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDirectoryLimitsXAmzTargetEnum {
    DirectoryService20150416GetDirectoryLimits = "DirectoryService_20150416.GetDirectoryLimits"
}


export class GetDirectoryLimitsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetDirectoryLimitsXAmzTargetEnum;
}


export class GetDirectoryLimitsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDirectoryLimitsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetDirectoryLimitsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  getDirectoryLimitsResult?: shared.GetDirectoryLimitsResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
