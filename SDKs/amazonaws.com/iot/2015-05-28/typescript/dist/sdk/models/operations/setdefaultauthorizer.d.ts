import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetDefaultAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetDefaultAuthorizerRequestBody extends SpeakeasyBase {
    authorizerName: string;
}
export declare class SetDefaultAuthorizerRequest extends SpeakeasyBase {
    headers: SetDefaultAuthorizerHeaders;
    request: SetDefaultAuthorizerRequestBody;
}
export declare class SetDefaultAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    setDefaultAuthorizerResponse?: shared.SetDefaultAuthorizerResponse;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
