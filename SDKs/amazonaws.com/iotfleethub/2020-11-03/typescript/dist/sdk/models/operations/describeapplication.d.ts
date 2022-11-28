import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DescribeApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeApplicationRequest extends SpeakeasyBase {
    pathParams: DescribeApplicationPathParams;
    headers: DescribeApplicationHeaders;
}
export declare class DescribeApplicationResponse extends SpeakeasyBase {
    contentType: string;
    describeApplicationResponse?: shared.DescribeApplicationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
