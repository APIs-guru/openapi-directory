import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcePoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetResourcePoliciesXAmzTargetEnum {
    AwsGlueGetResourcePolicies = "AWSGlue.GetResourcePolicies"
}
export declare class GetResourcePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePoliciesXAmzTargetEnum;
}
export declare class GetResourcePoliciesRequest extends SpeakeasyBase {
    queryParams: GetResourcePoliciesQueryParams;
    headers: GetResourcePoliciesHeaders;
    request: shared.GetResourcePoliciesRequest;
}
export declare class GetResourcePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    getResourcePoliciesResponse?: shared.GetResourcePoliciesResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
