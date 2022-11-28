import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListReceiptFiltersActionEnum {
    ListReceiptFilters = "ListReceiptFilters"
}
export declare enum PostListReceiptFiltersVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListReceiptFiltersQueryParams extends SpeakeasyBase {
    action: PostListReceiptFiltersActionEnum;
    version: PostListReceiptFiltersVersionEnum;
}
export declare class PostListReceiptFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListReceiptFiltersRequest extends SpeakeasyBase {
    queryParams: PostListReceiptFiltersQueryParams;
    headers: PostListReceiptFiltersHeaders;
    request?: Uint8Array;
}
export declare class PostListReceiptFiltersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
