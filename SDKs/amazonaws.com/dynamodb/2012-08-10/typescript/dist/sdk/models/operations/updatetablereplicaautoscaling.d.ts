import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTableReplicaAutoScalingXAmzTargetEnum {
    DynamoDb20120810UpdateTableReplicaAutoScaling = "DynamoDB_20120810.UpdateTableReplicaAutoScaling"
}
export declare class UpdateTableReplicaAutoScalingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTableReplicaAutoScalingXAmzTargetEnum;
}
export declare class UpdateTableReplicaAutoScalingRequest extends SpeakeasyBase {
    headers: UpdateTableReplicaAutoScalingHeaders;
    request: shared.UpdateTableReplicaAutoScalingInput;
}
export declare class UpdateTableReplicaAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateTableReplicaAutoScalingOutput?: shared.UpdateTableReplicaAutoScalingOutput;
}
