import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeIdentityPoolUsagePathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class DescribeIdentityPoolUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeIdentityPoolUsageRequest extends SpeakeasyBase {
    pathParams: DescribeIdentityPoolUsagePathParams;
    headers: DescribeIdentityPoolUsageHeaders;
}
export declare class DescribeIdentityPoolUsageResponse extends SpeakeasyBase {
    contentType: string;
    describeIdentityPoolUsageResponse?: shared.DescribeIdentityPoolUsageResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
