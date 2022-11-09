import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyHapgXAmzTargetEnum {
    CloudHsmFrontendServiceModifyHapg = "CloudHsmFrontendService.ModifyHapg"
}
export declare class ModifyHapgHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyHapgXAmzTargetEnum;
}
export declare class ModifyHapgRequest extends SpeakeasyBase {
    headers: ModifyHapgHeaders;
    request: shared.ModifyHapgRequest;
}
export declare class ModifyHapgResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    invalidRequestException?: any;
    modifyHapgResponse?: shared.ModifyHapgResponse;
    statusCode: number;
}
