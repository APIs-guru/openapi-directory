import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteColumnStatisticsForPartitionXAmzTargetEnum {
    AwsGlueDeleteColumnStatisticsForPartition = "AWSGlue.DeleteColumnStatisticsForPartition"
}
export declare class DeleteColumnStatisticsForPartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteColumnStatisticsForPartitionXAmzTargetEnum;
}
export declare class DeleteColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    headers: DeleteColumnStatisticsForPartitionHeaders;
    request: shared.DeleteColumnStatisticsForPartitionRequest;
}
export declare class DeleteColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    contentType: string;
    deleteColumnStatisticsForPartitionResponse?: Map<string, any>;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
