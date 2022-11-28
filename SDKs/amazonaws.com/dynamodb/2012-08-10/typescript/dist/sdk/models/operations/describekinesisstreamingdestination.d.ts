import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDb20120810DescribeKinesisStreamingDestination = "DynamoDB_20120810.DescribeKinesisStreamingDestination"
}
export declare class DescribeKinesisStreamingDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeKinesisStreamingDestinationXAmzTargetEnum;
}
export declare class DescribeKinesisStreamingDestinationRequest extends SpeakeasyBase {
    headers: DescribeKinesisStreamingDestinationHeaders;
    request: shared.DescribeKinesisStreamingDestinationInput;
}
export declare class DescribeKinesisStreamingDestinationResponse extends SpeakeasyBase {
    contentType: string;
    describeKinesisStreamingDestinationOutput?: shared.DescribeKinesisStreamingDestinationOutput;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
