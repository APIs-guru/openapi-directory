import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAccountLimitsActionEnum {
    DescribeAccountLimits = "DescribeAccountLimits"
}
export declare enum PostDescribeAccountLimitsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeAccountLimitsQueryParams extends SpeakeasyBase {
    action: PostDescribeAccountLimitsActionEnum;
    version: PostDescribeAccountLimitsVersionEnum;
}
export declare class PostDescribeAccountLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAccountLimitsRequest extends SpeakeasyBase {
    queryParams: PostDescribeAccountLimitsQueryParams;
    headers: PostDescribeAccountLimitsHeaders;
}
export declare class PostDescribeAccountLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
