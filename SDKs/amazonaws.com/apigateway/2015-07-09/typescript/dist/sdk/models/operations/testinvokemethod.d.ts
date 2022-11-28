import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestInvokeMethodPathParams extends SpeakeasyBase {
    httpMethod: string;
    resourceId: string;
    restapiId: string;
}
export declare class TestInvokeMethodHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestInvokeMethodRequestBody extends SpeakeasyBase {
    body?: string;
    clientCertificateId?: string;
    headers?: Map<string, string>;
    multiValueHeaders?: Map<string, string[]>;
    pathWithQueryString?: string;
    stageVariables?: Map<string, string>;
}
export declare class TestInvokeMethodRequest extends SpeakeasyBase {
    pathParams: TestInvokeMethodPathParams;
    headers: TestInvokeMethodHeaders;
    request: TestInvokeMethodRequestBody;
}
export declare class TestInvokeMethodResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    testInvokeMethodResponse?: shared.TestInvokeMethodResponse;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
