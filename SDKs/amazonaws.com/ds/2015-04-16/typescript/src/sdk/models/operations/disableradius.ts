import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableRadiusXAmzTargetEnum {
    DirectoryService20150416DisableRadius = "DirectoryService_20150416.DisableRadius"
}


export class DisableRadiusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableRadiusXAmzTargetEnum;
}


export class DisableRadiusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableRadiusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableRadiusRequest;
}


export class DisableRadiusResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disableRadiusResult?: Map<string, any>;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
