import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RejectSharedDirectoryXAmzTargetEnum {
    DirectoryService20150416RejectSharedDirectory = "DirectoryService_20150416.RejectSharedDirectory"
}


export class RejectSharedDirectoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: RejectSharedDirectoryXAmzTargetEnum;
}


export class RejectSharedDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RejectSharedDirectoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RejectSharedDirectoryRequest;
}


export class RejectSharedDirectoryResponse extends SpeakeasyBase {
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
  rejectSharedDirectoryResult?: shared.RejectSharedDirectoryResult;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
