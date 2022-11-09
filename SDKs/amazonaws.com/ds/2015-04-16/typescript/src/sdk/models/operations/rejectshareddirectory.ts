import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RejectSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416RejectSharedDirectory = "DirectoryService_20150416.RejectSharedDirectory"
}


export class RejectSharedDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectSharedDirectoryXAmzTargetEnum;
}


export class RejectSharedDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: RejectSharedDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RejectSharedDirectoryRequest;
}


export class RejectSharedDirectoryResponse extends SpeakeasyBase {
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
  rejectSharedDirectoryResult?: shared.RejectSharedDirectoryResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
