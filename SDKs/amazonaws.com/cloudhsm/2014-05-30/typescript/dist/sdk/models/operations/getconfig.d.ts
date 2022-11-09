import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetConfigXAmzTargetEnum {
    CloudHsmFrontendServiceGetConfig = "CloudHsmFrontendService.GetConfig"
}
export declare class GetConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConfigXAmzTargetEnum;
}
export declare class GetConfigRequest extends SpeakeasyBase {
    headers: GetConfigHeaders;
    request: shared.GetConfigRequest;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    getConfigResponse?: shared.GetConfigResponse;
    invalidRequestException?: any;
    statusCode: number;
}
