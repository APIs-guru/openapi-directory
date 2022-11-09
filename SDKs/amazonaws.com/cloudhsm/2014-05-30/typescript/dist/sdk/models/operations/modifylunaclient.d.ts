import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceModifyLunaClient = "CloudHsmFrontendService.ModifyLunaClient"
}
export declare class ModifyLunaClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyLunaClientXAmzTargetEnum;
}
export declare class ModifyLunaClientRequest extends SpeakeasyBase {
    headers: ModifyLunaClientHeaders;
    request: shared.ModifyLunaClientRequest;
}
export declare class ModifyLunaClientResponse extends SpeakeasyBase {
    cloudHsmServiceException?: any;
    contentType: string;
    modifyLunaClientResponse?: shared.ModifyLunaClientResponse;
    statusCode: number;
}
