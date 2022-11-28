import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CopyBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CopyBackup = "AWSSimbaAPIService_v20180301.CopyBackup"
}
export declare class CopyBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyBackupXAmzTargetEnum;
}
export declare class CopyBackupRequest extends SpeakeasyBase {
    headers: CopyBackupHeaders;
    request: shared.CopyBackupRequest;
}
export declare class CopyBackupResponse extends SpeakeasyBase {
    backupNotFound?: any;
    badRequest?: any;
    contentType: string;
    copyBackupResponse?: shared.CopyBackupResponse;
    incompatibleParameterError?: any;
    incompatibleRegionForMultiAz?: any;
    internalServerError?: any;
    invalidDestinationKmsKey?: any;
    invalidRegion?: any;
    invalidSourceKmsKey?: any;
    serviceLimitExceeded?: any;
    sourceBackupUnavailable?: any;
    statusCode: number;
    unsupportedOperation?: any;
}
