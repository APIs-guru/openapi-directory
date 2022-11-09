import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcceptSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416AcceptSharedDirectory = "DirectoryService_20150416.AcceptSharedDirectory"
}


export class AcceptSharedDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcceptSharedDirectoryXAmzTargetEnum;
}


export class AcceptSharedDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcceptSharedDirectoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcceptSharedDirectoryRequest;
}


export class AcceptSharedDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  acceptSharedDirectoryResult?: shared.AcceptSharedDirectoryResult;

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
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
