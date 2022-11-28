import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEventConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeEventConfigurationsRequest extends SpeakeasyBase {
    headers: DescribeEventConfigurationsHeaders;
}
export declare class DescribeEventConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    describeEventConfigurationsResponse?: shared.DescribeEventConfigurationsResponse;
    internalFailureException?: any;
    statusCode: number;
    throttlingException?: any;
}
