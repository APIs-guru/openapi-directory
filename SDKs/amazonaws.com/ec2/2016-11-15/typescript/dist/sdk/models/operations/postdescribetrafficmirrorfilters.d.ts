import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeTrafficMirrorFiltersActionEnum {
    DescribeTrafficMirrorFilters = "DescribeTrafficMirrorFilters"
}
export declare enum PostDescribeTrafficMirrorFiltersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeTrafficMirrorFiltersQueryParams extends SpeakeasyBase {
    action: PostDescribeTrafficMirrorFiltersActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeTrafficMirrorFiltersVersionEnum;
}
export declare class PostDescribeTrafficMirrorFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTrafficMirrorFiltersRequest extends SpeakeasyBase {
    queryParams: PostDescribeTrafficMirrorFiltersQueryParams;
    headers: PostDescribeTrafficMirrorFiltersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTrafficMirrorFiltersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
