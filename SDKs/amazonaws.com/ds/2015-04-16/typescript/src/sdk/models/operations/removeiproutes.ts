import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveIpRoutesXAmzTargetEnum {
    DirectoryService20150416RemoveIpRoutes = "DirectoryService_20150416.RemoveIpRoutes"
}


export class RemoveIpRoutesHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveIpRoutesXAmzTargetEnum;
}


export class RemoveIpRoutesRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveIpRoutesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveIpRoutesRequest;
}


export class RemoveIpRoutesResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  removeIpRoutesResult?: Map<string, any>;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
