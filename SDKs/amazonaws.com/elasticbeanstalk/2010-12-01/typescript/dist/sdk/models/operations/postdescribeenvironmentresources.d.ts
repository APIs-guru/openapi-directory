import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeEnvironmentResourcesActionEnum {
    DescribeEnvironmentResources = "DescribeEnvironmentResources"
}
export declare enum PostDescribeEnvironmentResourcesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeEnvironmentResourcesQueryParams extends SpeakeasyBase {
    action: PostDescribeEnvironmentResourcesActionEnum;
    version: PostDescribeEnvironmentResourcesVersionEnum;
}
export declare class PostDescribeEnvironmentResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEnvironmentResourcesRequest extends SpeakeasyBase {
    queryParams: PostDescribeEnvironmentResourcesQueryParams;
    headers: PostDescribeEnvironmentResourcesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEnvironmentResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
