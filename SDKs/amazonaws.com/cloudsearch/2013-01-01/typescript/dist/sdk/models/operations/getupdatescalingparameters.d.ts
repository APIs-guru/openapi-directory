import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetUpdateScalingParametersActionEnum {
    UpdateScalingParameters = "UpdateScalingParameters"
}
/**
 * The desired instance type and desired number of replicas of each index partition.
**/
export declare class GetUpdateScalingParametersScalingParameters extends SpeakeasyBase {
    desiredInstanceType?: shared.PartitionInstanceTypeEnum;
    desiredPartitionCount?: number;
    desiredReplicationCount?: number;
}
export declare enum GetUpdateScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetUpdateScalingParametersQueryParams extends SpeakeasyBase {
    action: GetUpdateScalingParametersActionEnum;
    domainName: string;
    scalingParameters: GetUpdateScalingParametersScalingParameters;
    version: GetUpdateScalingParametersVersionEnum;
}
export declare class GetUpdateScalingParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateScalingParametersRequest extends SpeakeasyBase {
    queryParams: GetUpdateScalingParametersQueryParams;
    headers: GetUpdateScalingParametersHeaders;
}
export declare class GetUpdateScalingParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
