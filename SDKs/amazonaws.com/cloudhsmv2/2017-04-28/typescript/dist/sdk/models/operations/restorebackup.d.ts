import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RestoreBackupXAmzTargetEnum {
    BaldrApiServiceRestoreBackup = "BaldrApiService.RestoreBackup"
}
export declare class RestoreBackupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreBackupXAmzTargetEnum;
}
export declare class RestoreBackupRequest extends SpeakeasyBase {
    headers: RestoreBackupHeaders;
    request: shared.RestoreBackupRequest;
}
export declare class RestoreBackupResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    restoreBackupResponse?: shared.RestoreBackupResponse;
    statusCode: number;
}
