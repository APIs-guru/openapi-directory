import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateVolumeFromBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateVolumeFromBackup = "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup"
}
export declare class CreateVolumeFromBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVolumeFromBackupXAmzTargetEnum;
}
export declare class CreateVolumeFromBackupRequest extends SpeakeasyBase {
    headers: CreateVolumeFromBackupHeaders;
    request: shared.CreateVolumeFromBackupRequest;
}
export declare class CreateVolumeFromBackupResponse extends SpeakeasyBase {
    backupNotFound?: any;
    badRequest?: any;
    contentType: string;
    createVolumeFromBackupResponse?: shared.CreateVolumeFromBackupResponse;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    missingVolumeConfiguration?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
    storageVirtualMachineNotFound?: any;
}
