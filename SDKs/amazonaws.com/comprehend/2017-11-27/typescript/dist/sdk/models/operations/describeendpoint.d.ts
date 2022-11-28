import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEndpointXAmzTargetEnum {
    Comprehend20171127DescribeEndpoint = "Comprehend_20171127.DescribeEndpoint"
}
export declare class DescribeEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointXAmzTargetEnum;
}
export declare class DescribeEndpointRequest extends SpeakeasyBase {
    headers: DescribeEndpointHeaders;
    request: shared.DescribeEndpointRequest;
}
export declare class DescribeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointResponse?: shared.DescribeEndpointResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
