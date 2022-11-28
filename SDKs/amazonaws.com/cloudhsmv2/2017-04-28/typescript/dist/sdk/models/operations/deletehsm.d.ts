import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteHsmXAmzTargetEnum {
    BaldrApiServiceDeleteHsm = "BaldrApiService.DeleteHsm"
}
export declare class DeleteHsmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHsmXAmzTargetEnum;
}
export declare class DeleteHsmRequest extends SpeakeasyBase {
    headers: DeleteHsmHeaders;
    request: shared.DeleteHsmRequest;
}
export declare class DeleteHsmResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    deleteHsmResponse?: shared.DeleteHsmResponse;
    statusCode: number;
}
