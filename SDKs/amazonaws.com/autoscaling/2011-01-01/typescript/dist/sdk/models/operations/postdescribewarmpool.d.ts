import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeWarmPoolActionEnum {
    DescribeWarmPool = "DescribeWarmPool"
}
export declare enum PostDescribeWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeWarmPoolQueryParams extends SpeakeasyBase {
    action: PostDescribeWarmPoolActionEnum;
    version: PostDescribeWarmPoolVersionEnum;
}
export declare class PostDescribeWarmPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeWarmPoolRequest extends SpeakeasyBase {
    queryParams: PostDescribeWarmPoolQueryParams;
    headers: PostDescribeWarmPoolHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeWarmPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
