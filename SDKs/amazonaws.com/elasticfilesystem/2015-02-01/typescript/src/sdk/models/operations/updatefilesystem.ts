import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateFileSystemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class UpdateFileSystemHeaders extends SpeakeasyBase {
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
}

export enum UpdateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting",
    Provisioned = "provisioned"
}


export class UpdateFileSystemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputInMibps" })
  provisionedThroughputInMibps?: number;

  @SpeakeasyMetadata({ data: "json, name=ThroughputMode" })
  throughputMode?: UpdateFileSystemRequestBodyThroughputModeEnum;
}


export class UpdateFileSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateFileSystemPathParams;

  @SpeakeasyMetadata()
  headers: UpdateFileSystemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateFileSystemRequestBody;
}


export class UpdateFileSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemDescription?: shared.FileSystemDescription;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  incorrectFileSystemLifeCycleState?: any;

  @SpeakeasyMetadata()
  insufficientThroughputCapacity?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throughputLimitExceeded?: any;

  @SpeakeasyMetadata()
  tooManyRequests?: any;
}
