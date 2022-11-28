import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class DescribeSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSecurityProfileRequest extends SpeakeasyBase {
    pathParams: DescribeSecurityProfilePathParams;
    headers: DescribeSecurityProfileHeaders;
}
export declare class DescribeSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    describeSecurityProfileResponse?: shared.DescribeSecurityProfileResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
