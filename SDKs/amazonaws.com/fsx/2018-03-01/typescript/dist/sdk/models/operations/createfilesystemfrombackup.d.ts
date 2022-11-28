import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFileSystemFromBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateFileSystemFromBackup = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"
}
export declare class CreateFileSystemFromBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFileSystemFromBackupXAmzTargetEnum;
}
export declare class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
    headers: CreateFileSystemFromBackupHeaders;
    request: shared.CreateFileSystemFromBackupRequest;
}
export declare class CreateFileSystemFromBackupResponse extends SpeakeasyBase {
    activeDirectoryError?: any;
    backupNotFound?: any;
    badRequest?: any;
    contentType: string;
    createFileSystemFromBackupResponse?: shared.CreateFileSystemFromBackupResponse;
    incompatibleParameterError?: any;
    internalServerError?: any;
    invalidNetworkSettings?: any;
    invalidPerUnitStorageThroughput?: any;
    missingFileSystemConfiguration?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
}
