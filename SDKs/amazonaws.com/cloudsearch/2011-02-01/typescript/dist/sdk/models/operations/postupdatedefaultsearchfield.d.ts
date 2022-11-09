import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateDefaultSearchFieldActionEnum {
    UpdateDefaultSearchField = "UpdateDefaultSearchField"
}
export declare enum PostUpdateDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostUpdateDefaultSearchFieldQueryParams extends SpeakeasyBase {
    action: PostUpdateDefaultSearchFieldActionEnum;
    version: PostUpdateDefaultSearchFieldVersionEnum;
}
export declare class PostUpdateDefaultSearchFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateDefaultSearchFieldRequest extends SpeakeasyBase {
    queryParams: PostUpdateDefaultSearchFieldQueryParams;
    headers: PostUpdateDefaultSearchFieldHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateDefaultSearchFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
