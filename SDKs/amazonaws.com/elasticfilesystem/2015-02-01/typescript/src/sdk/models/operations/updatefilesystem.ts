import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFileSystemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class UpdateFileSystemHeaders extends SpeakeasyBase {
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
}

export enum UpdateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting"
,    Provisioned = "provisioned"
}


export class UpdateFileSystemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProvisionedThroughputInMibps" })
  provisionedThroughputInMibps?: number;

  @Metadata({ data: "json, name=ThroughputMode" })
  throughputMode?: UpdateFileSystemRequestBodyThroughputModeEnum;
}


export class UpdateFileSystemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFileSystemPathParams;

  @Metadata()
  headers: UpdateFileSystemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateFileSystemRequestBody;
}


export class UpdateFileSystemResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemDescription?: shared.FileSystemDescription;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incorrectFileSystemLifeCycleState?: any;

  @Metadata()
  insufficientThroughputCapacity?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throughputLimitExceeded?: any;

  @Metadata()
  tooManyRequests?: any;
}
