import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFileSystemHeaders extends SpeakeasyBase {
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

export enum CreateFileSystemRequestBodyPerformanceModeEnum {
    GeneralPurpose = "generalPurpose"
,    MaxIo = "maxIO"
}

export enum CreateFileSystemRequestBodyThroughputModeEnum {
    Bursting = "bursting"
,    Provisioned = "provisioned"
}


export class CreateFileSystemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZoneName" })
  availabilityZoneName?: string;

  @Metadata({ data: "json, name=Backup" })
  backup?: boolean;

  @Metadata({ data: "json, name=CreationToken" })
  creationToken: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=PerformanceMode" })
  performanceMode?: CreateFileSystemRequestBodyPerformanceModeEnum;

  @Metadata({ data: "json, name=ProvisionedThroughputInMibps" })
  provisionedThroughputInMibps?: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=ThroughputMode" })
  throughputMode?: CreateFileSystemRequestBodyThroughputModeEnum;
}


export class CreateFileSystemRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFileSystemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateFileSystemRequestBody;
}


export class CreateFileSystemResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemAlreadyExists?: any;

  @Metadata()
  fileSystemDescription?: shared.FileSystemDescription;

  @Metadata()
  fileSystemLimitExceeded?: any;

  @Metadata()
  insufficientThroughputCapacity?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throughputLimitExceeded?: any;

  @Metadata()
  unsupportedAvailabilityZone?: any;
}
