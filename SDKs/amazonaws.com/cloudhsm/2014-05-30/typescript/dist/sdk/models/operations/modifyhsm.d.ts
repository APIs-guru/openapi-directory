import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyHsmXAmzTargetEnum {
    CloudHsmFrontendServiceModifyHsm = "CloudHsmFrontendService.ModifyHsm"
}
export declare class ModifyHsmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyHsmXAmzTargetEnum;
}
export declare class ModifyHsmRequest extends SpeakeasyBase {
    headers: ModifyHsmHeaders;
    request: shared.ModifyHsmRequest;
}
export declare class ModifyHsmResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    modifyHsmResponse?: shared.ModifyHsmResponse;
    statusCode: number;
}
