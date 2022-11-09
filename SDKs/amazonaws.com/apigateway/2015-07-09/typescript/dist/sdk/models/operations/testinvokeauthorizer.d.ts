import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestInvokeAuthorizerPathParams extends SpeakeasyBase {
    authorizerId: string;
    restapiId: string;
}
export declare class TestInvokeAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestInvokeAuthorizerRequestBody extends SpeakeasyBase {
    additionalContext?: Map<string, string>;
    body?: string;
    headers?: Map<string, string>;
    multiValueHeaders?: Map<string, string[]>;
    pathWithQueryString?: string;
    stageVariables?: Map<string, string>;
}
export declare class TestInvokeAuthorizerRequest extends SpeakeasyBase {
    pathParams: TestInvokeAuthorizerPathParams;
    headers: TestInvokeAuthorizerHeaders;
    request: TestInvokeAuthorizerRequestBody;
}
export declare class TestInvokeAuthorizerResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    testInvokeAuthorizerResponse?: shared.TestInvokeAuthorizerResponse;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
