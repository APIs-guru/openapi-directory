import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestRoleRequestBody extends SpeakeasyBase {
    inputBucket: string;
    outputBucket: string;
    role: string;
    topics: string[];
}
export declare class TestRoleRequest extends SpeakeasyBase {
    headers: TestRoleHeaders;
    request: TestRoleRequestBody;
}
export declare class TestRoleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    testRoleResponse?: shared.TestRoleResponse;
    validationException?: any;
}
