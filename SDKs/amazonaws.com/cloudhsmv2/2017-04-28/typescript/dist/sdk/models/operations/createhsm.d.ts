import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHsmXAmzTargetEnum {
    BaldrApiServiceCreateHsm = "BaldrApiService.CreateHsm"
}
export declare class CreateHsmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHsmXAmzTargetEnum;
}
export declare class CreateHsmRequest extends SpeakeasyBase {
    headers: CreateHsmHeaders;
    request: shared.CreateHsmRequest;
}
export declare class CreateHsmResponse extends SpeakeasyBase {
    cloudHsmAccessDeniedException?: any;
    cloudHsmInternalFailureException?: any;
    cloudHsmInvalidRequestException?: any;
    cloudHsmResourceNotFoundException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    createHsmResponse?: shared.CreateHsmResponse;
    statusCode: number;
}
