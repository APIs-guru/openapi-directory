import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClearDefaultAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ClearDefaultAuthorizerRequest extends SpeakeasyBase {
    headers: ClearDefaultAuthorizerHeaders;
}
export declare class ClearDefaultAuthorizerResponse extends SpeakeasyBase {
    clearDefaultAuthorizerResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
