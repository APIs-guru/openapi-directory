import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateColumnStatisticsForPartitionXAmzTargetEnum {
    AwsGlueUpdateColumnStatisticsForPartition = "AWSGlue.UpdateColumnStatisticsForPartition"
}
export declare class UpdateColumnStatisticsForPartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateColumnStatisticsForPartitionXAmzTargetEnum;
}
export declare class UpdateColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    headers: UpdateColumnStatisticsForPartitionHeaders;
    request: shared.UpdateColumnStatisticsForPartitionRequest;
}
export declare class UpdateColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateColumnStatisticsForPartitionResponse?: shared.UpdateColumnStatisticsForPartitionResponse;
}
