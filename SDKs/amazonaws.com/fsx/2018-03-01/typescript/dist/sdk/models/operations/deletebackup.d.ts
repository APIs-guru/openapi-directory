import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteBackup = "AWSSimbaAPIService_v20180301.DeleteBackup"
}
export declare class DeleteBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBackupXAmzTargetEnum;
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    headers: DeleteBackupHeaders;
    request: shared.DeleteBackupRequest;
}
export declare class DeleteBackupResponse extends SpeakeasyBase {
    backupBeingCopied?: any;
    backupInProgress?: any;
    backupNotFound?: any;
    backupRestoring?: any;
    badRequest?: any;
    contentType: string;
    deleteBackupResponse?: shared.DeleteBackupResponse;
    incompatibleParameterError?: any;
    internalServerError?: any;
    statusCode: number;
}
