import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBackupXAmzTargetEnum {
    BaldrApiServiceDeleteBackup = "BaldrApiService.DeleteBackup"
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
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    deleteBackupResponse?: shared.DeleteBackupResponse;
    statusCode: number;
}
