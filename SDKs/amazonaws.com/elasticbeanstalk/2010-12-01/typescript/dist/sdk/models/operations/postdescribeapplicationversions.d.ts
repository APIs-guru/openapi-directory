import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeApplicationVersionsActionEnum {
    DescribeApplicationVersions = "DescribeApplicationVersions"
}
export declare enum PostDescribeApplicationVersionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeApplicationVersionsQueryParams extends SpeakeasyBase {
    action: PostDescribeApplicationVersionsActionEnum;
    version: PostDescribeApplicationVersionsVersionEnum;
}
export declare class PostDescribeApplicationVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeApplicationVersionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeApplicationVersionsQueryParams;
    headers: PostDescribeApplicationVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeApplicationVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
