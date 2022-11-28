import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeWarmPoolActionEnum {
    DescribeWarmPool = "DescribeWarmPool"
}
export declare enum GetDescribeWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeWarmPoolQueryParams extends SpeakeasyBase {
    action: GetDescribeWarmPoolActionEnum;
    autoScalingGroupName: string;
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeWarmPoolVersionEnum;
}
export declare class GetDescribeWarmPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeWarmPoolRequest extends SpeakeasyBase {
    queryParams: GetDescribeWarmPoolQueryParams;
    headers: GetDescribeWarmPoolHeaders;
}
export declare class GetDescribeWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
