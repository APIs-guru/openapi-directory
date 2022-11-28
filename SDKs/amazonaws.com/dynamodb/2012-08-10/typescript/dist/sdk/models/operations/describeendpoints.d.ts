import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEndpointsXAmzTargetEnum {
    DynamoDb20120810DescribeEndpoints = "DynamoDB_20120810.DescribeEndpoints"
}
export declare class DescribeEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointsXAmzTargetEnum;
}
export declare class DescribeEndpointsRequest extends SpeakeasyBase {
    headers: DescribeEndpointsHeaders;
    request: Map<string, any>;
}
export declare class DescribeEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    describeEndpointsResponse?: shared.DescribeEndpointsResponse;
    statusCode: number;
}
