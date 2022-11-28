import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAuthorizerPathParams extends SpeakeasyBase {
    authorizerName: string;
}
export declare class UpdateAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class UpdateAuthorizerRequestBody extends SpeakeasyBase {
    authorizerFunctionArn?: string;
    status?: UpdateAuthorizerRequestBodyStatusEnum;
    tokenKeyName?: string;
    tokenSigningPublicKeys?: Map<string, string>;
}
export declare class UpdateAuthorizerRequest extends SpeakeasyBase {
    pathParams: UpdateAuthorizerPathParams;
    headers: UpdateAuthorizerHeaders;
    request: UpdateAuthorizerRequestBody;
}
export declare class UpdateAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
