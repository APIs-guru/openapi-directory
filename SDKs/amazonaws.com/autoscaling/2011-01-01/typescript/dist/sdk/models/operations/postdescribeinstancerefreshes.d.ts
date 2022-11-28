import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeInstanceRefreshesActionEnum {
    DescribeInstanceRefreshes = "DescribeInstanceRefreshes"
}
export declare enum PostDescribeInstanceRefreshesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeInstanceRefreshesQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceRefreshesActionEnum;
    version: PostDescribeInstanceRefreshesVersionEnum;
}
export declare class PostDescribeInstanceRefreshesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceRefreshesRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceRefreshesQueryParams;
    headers: PostDescribeInstanceRefreshesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceRefreshesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
