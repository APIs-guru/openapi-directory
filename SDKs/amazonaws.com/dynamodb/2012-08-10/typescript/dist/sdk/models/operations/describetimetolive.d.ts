import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTimeToLiveXAmzTargetEnum {
    DynamoDb20120810DescribeTimeToLive = "DynamoDB_20120810.DescribeTimeToLive"
}
export declare class DescribeTimeToLiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTimeToLiveXAmzTargetEnum;
}
export declare class DescribeTimeToLiveRequest extends SpeakeasyBase {
    headers: DescribeTimeToLiveHeaders;
    request: shared.DescribeTimeToLiveInput;
}
export declare class DescribeTimeToLiveResponse extends SpeakeasyBase {
    contentType: string;
    describeTimeToLiveOutput?: shared.DescribeTimeToLiveOutput;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
