import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteHsmXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteHsm = "CloudHsmFrontendService.DeleteHsm"
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
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    deleteHsmResponse?: shared.DeleteHsmResponse;
    invalidRequestException?: any;
    statusCode: number;
}
