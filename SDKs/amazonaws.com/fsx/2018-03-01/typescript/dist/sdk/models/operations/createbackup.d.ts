import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateBackup = "AWSSimbaAPIService_v20180301.CreateBackup"
}
export declare class CreateBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBackupXAmzTargetEnum;
}
export declare class CreateBackupRequest extends SpeakeasyBase {
    headers: CreateBackupHeaders;
    request: shared.CreateBackupRequest;
}
export declare class CreateBackupResponse extends SpeakeasyBase {
    backupInProgress?: any;
    badRequest?: any;
    contentType: string;
    createBackupResponse?: shared.CreateBackupResponse;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
    unsupportedOperation?: any;
    volumeNotFound?: any;
}
