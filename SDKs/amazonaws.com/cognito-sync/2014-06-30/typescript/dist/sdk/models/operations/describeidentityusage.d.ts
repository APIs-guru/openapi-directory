import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeIdentityUsagePathParams extends SpeakeasyBase {
    identityId: string;
    identityPoolId: string;
}
export declare class DescribeIdentityUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeIdentityUsageRequest extends SpeakeasyBase {
    pathParams: DescribeIdentityUsagePathParams;
    headers: DescribeIdentityUsageHeaders;
}
export declare class DescribeIdentityUsageResponse extends SpeakeasyBase {
    contentType: string;
    describeIdentityUsageResponse?: shared.DescribeIdentityUsageResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
