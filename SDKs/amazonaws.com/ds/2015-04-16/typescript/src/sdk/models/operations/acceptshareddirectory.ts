import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AcceptSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416AcceptSharedDirectory = "DirectoryService_20150416.AcceptSharedDirectory"
}


export class AcceptSharedDirectoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: AcceptSharedDirectoryXAmzTargetEnum;
}


export class AcceptSharedDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcceptSharedDirectoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AcceptSharedDirectoryRequest;
}


export class AcceptSharedDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptSharedDirectoryResult?: shared.AcceptSharedDirectoryResult;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryAlreadySharedException?: any;

  @SpeakeasyMetadata()
  entityDoesNotExistException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
