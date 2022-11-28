import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetColumnStatisticsForPartitionXAmzTargetEnum {
    AwsGlueGetColumnStatisticsForPartition = "AWSGlue.GetColumnStatisticsForPartition"
}
export declare class GetColumnStatisticsForPartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetColumnStatisticsForPartitionXAmzTargetEnum;
}
export declare class GetColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    headers: GetColumnStatisticsForPartitionHeaders;
    request: shared.GetColumnStatisticsForPartitionRequest;
}
export declare class GetColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getColumnStatisticsForPartitionResponse?: shared.GetColumnStatisticsForPartitionResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
