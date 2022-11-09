import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeAutoScalingInstancesActionEnum {
    DescribeAutoScalingInstances = "DescribeAutoScalingInstances"
}
export declare enum GetDescribeAutoScalingInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeAutoScalingInstancesQueryParams extends SpeakeasyBase {
    action: GetDescribeAutoScalingInstancesActionEnum;
    instanceIds?: string[];
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeAutoScalingInstancesVersionEnum;
}
export declare class GetDescribeAutoScalingInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAutoScalingInstancesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAutoScalingInstancesQueryParams;
    headers: GetDescribeAutoScalingInstancesHeaders;
}
export declare class GetDescribeAutoScalingInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
