import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeAccountLimitsActionEnum {
    DescribeAccountLimits = "DescribeAccountLimits"
}
export declare enum GetDescribeAccountLimitsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDescribeAccountLimitsQueryParams extends SpeakeasyBase {
    action: GetDescribeAccountLimitsActionEnum;
    marker?: string;
    pageSize?: number;
    version: GetDescribeAccountLimitsVersionEnum;
}
export declare class GetDescribeAccountLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAccountLimitsRequest extends SpeakeasyBase {
    queryParams: GetDescribeAccountLimitsQueryParams;
    headers: GetDescribeAccountLimitsHeaders;
}
export declare class GetDescribeAccountLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
