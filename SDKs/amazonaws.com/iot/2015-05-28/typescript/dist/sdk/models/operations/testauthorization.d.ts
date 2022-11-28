import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestAuthorizationQueryParams extends SpeakeasyBase {
    clientId?: string;
}
export declare class TestAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestAuthorizationRequestBody extends SpeakeasyBase {
    authInfos: shared.AuthInfo[];
    cognitoIdentityPoolId?: string;
    policyNamesToAdd?: string[];
    policyNamesToSkip?: string[];
    principal?: string;
}
export declare class TestAuthorizationRequest extends SpeakeasyBase {
    queryParams: TestAuthorizationQueryParams;
    headers: TestAuthorizationHeaders;
    request: TestAuthorizationRequestBody;
}
export declare class TestAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    testAuthorizationResponse?: shared.TestAuthorizationResponse;
    throttlingException?: any;
    unauthorizedException?: any;
}
