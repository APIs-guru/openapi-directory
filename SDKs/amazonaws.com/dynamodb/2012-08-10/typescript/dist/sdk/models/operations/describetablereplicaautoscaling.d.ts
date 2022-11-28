import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTableReplicaAutoScalingXAmzTargetEnum {
    DynamoDb20120810DescribeTableReplicaAutoScaling = "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
}
export declare class DescribeTableReplicaAutoScalingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableReplicaAutoScalingXAmzTargetEnum;
}
export declare class DescribeTableReplicaAutoScalingRequest extends SpeakeasyBase {
    headers: DescribeTableReplicaAutoScalingHeaders;
    request: shared.DescribeTableReplicaAutoScalingInput;
}
export declare class DescribeTableReplicaAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    describeTableReplicaAutoScalingOutput?: shared.DescribeTableReplicaAutoScalingOutput;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
