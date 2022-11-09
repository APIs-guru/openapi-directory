import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateVolumeFromBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateVolumeFromBackup = "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup"
}


export class CreateVolumeFromBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateVolumeFromBackupXAmzTargetEnum;
}


export class CreateVolumeFromBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateVolumeFromBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateVolumeFromBackupRequest;
}


export class CreateVolumeFromBackupResponse extends SpeakeasyBase {
  @Metadata()
  backupNotFound?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVolumeFromBackupResponse?: shared.CreateVolumeFromBackupResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  missingVolumeConfiguration?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  storageVirtualMachineNotFound?: any;
}
