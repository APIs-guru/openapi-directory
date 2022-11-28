import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPartitionIndexesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum GetPartitionIndexesXAmzTargetEnum {
    AwsGlueGetPartitionIndexes = "AWSGlue.GetPartitionIndexes"
}
export declare class GetPartitionIndexesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPartitionIndexesXAmzTargetEnum;
}
export declare class GetPartitionIndexesRequest extends SpeakeasyBase {
    queryParams: GetPartitionIndexesQueryParams;
    headers: GetPartitionIndexesHeaders;
    request: shared.GetPartitionIndexesRequest;
}
export declare class GetPartitionIndexesResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getPartitionIndexesResponse?: shared.GetPartitionIndexesResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
