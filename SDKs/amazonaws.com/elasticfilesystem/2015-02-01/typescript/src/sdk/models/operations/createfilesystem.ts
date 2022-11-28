import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFileSystemHeaders extends SpeakeasyBase {
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

export enum CreateFileSystemRequestBodyPerformanceModeEnum {
    GeneralPurpose = "generalPurpose",
    MaxIo = "maxIO"
}

export enum CreateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting",
    Provisioned = "provisioned"
}


export class CreateFileSystemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneName" })
  availabilityZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=Backup" })
  backup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreationToken" })
  creationToken: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PerformanceMode" })
  performanceMode?: CreateFileSystemRequestBodyPerformanceModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputInMibps" })
  provisionedThroughputInMibps?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=ThroughputMode" })
  throughputMode?: CreateFileSystemRequestBodyThroughputModeEnum;
}


export class CreateFileSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFileSystemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateFileSystemRequestBody;
}


export class CreateFileSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemAlreadyExists?: any;

  @SpeakeasyMetadata()
  fileSystemDescription?: shared.FileSystemDescription;

  @SpeakeasyMetadata()
  fileSystemLimitExceeded?: any;

  @SpeakeasyMetadata()
  insufficientThroughputCapacity?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throughputLimitExceeded?: any;

  @SpeakeasyMetadata()
  unsupportedAvailabilityZone?: any;
}
