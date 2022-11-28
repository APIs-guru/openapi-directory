import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeInstanceRefreshesActionEnum {
    DescribeInstanceRefreshes = "DescribeInstanceRefreshes"
}
export declare enum GetDescribeInstanceRefreshesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeInstanceRefreshesQueryParams extends SpeakeasyBase {
    action: GetDescribeInstanceRefreshesActionEnum;
    autoScalingGroupName: string;
    instanceRefreshIds?: string[];
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeInstanceRefreshesVersionEnum;
}
export declare class GetDescribeInstanceRefreshesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeInstanceRefreshesRequest extends SpeakeasyBase {
    queryParams: GetDescribeInstanceRefreshesQueryParams;
    headers: GetDescribeInstanceRefreshesHeaders;
}
export declare class GetDescribeInstanceRefreshesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
