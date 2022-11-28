import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAuthorizerPathParams extends SpeakeasyBase {
    authorizerName: string;
}
export declare class CreateAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateAuthorizerRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class CreateAuthorizerRequestBody extends SpeakeasyBase {
    authorizerFunctionArn: string;
    signingDisabled?: boolean;
    status?: CreateAuthorizerRequestBodyStatusEnum;
    tags?: shared.Tag[];
    tokenKeyName?: string;
    tokenSigningPublicKeys?: Map<string, string>;
}
export declare class CreateAuthorizerRequest extends SpeakeasyBase {
    pathParams: CreateAuthorizerPathParams;
    headers: CreateAuthorizerHeaders;
    request: CreateAuthorizerRequestBody;
}
export declare class CreateAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    createAuthorizerResponse?: shared.CreateAuthorizerResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
