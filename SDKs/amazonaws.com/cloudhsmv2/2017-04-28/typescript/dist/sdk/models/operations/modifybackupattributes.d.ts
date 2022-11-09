import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyBackupAttributesXAmzTargetEnum {
    BaldrApiServiceModifyBackupAttributes = "BaldrApiService.ModifyBackupAttributes"
}
export declare class ModifyBackupAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyBackupAttributesXAmzTargetEnum;
}
export declare class ModifyBackupAttributesRequest extends SpeakeasyBase {
    headers: ModifyBackupAttributesHeaders;
    request: shared.ModifyBackupAttributesRequest;
}
export declare class ModifyBackupAttributesResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    modifyBackupAttributesResponse?: shared.ModifyBackupAttributesResponse;
    statusCode: number;
}
