import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ShareDirectoryXAmzTargetEnum {
    DirectoryService20150416ShareDirectory = "DirectoryService_20150416.ShareDirectory"
}


export class ShareDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: ShareDirectoryXAmzTargetEnum;
}


export class ShareDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: ShareDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ShareDirectoryRequest;
}


export class ShareDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryAlreadySharedException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidTargetException?: any;

  @Metadata()
  organizationsException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  shareDirectoryResult?: shared.ShareDirectoryResult;

  @Metadata()
  shareLimitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
