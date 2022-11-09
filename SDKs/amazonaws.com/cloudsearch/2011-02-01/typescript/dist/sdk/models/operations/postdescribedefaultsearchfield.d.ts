import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDefaultSearchFieldActionEnum {
    DescribeDefaultSearchField = "DescribeDefaultSearchField"
}
export declare enum PostDescribeDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDescribeDefaultSearchFieldQueryParams extends SpeakeasyBase {
    action: PostDescribeDefaultSearchFieldActionEnum;
    version: PostDescribeDefaultSearchFieldVersionEnum;
}
export declare class PostDescribeDefaultSearchFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDefaultSearchFieldRequest extends SpeakeasyBase {
    queryParams: PostDescribeDefaultSearchFieldQueryParams;
    headers: PostDescribeDefaultSearchFieldHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDefaultSearchFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
