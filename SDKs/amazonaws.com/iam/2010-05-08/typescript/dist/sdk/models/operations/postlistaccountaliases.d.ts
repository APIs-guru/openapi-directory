import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListAccountAliasesActionEnum {
    ListAccountAliases = "ListAccountAliases"
}
export declare enum PostListAccountAliasesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListAccountAliasesQueryParams extends SpeakeasyBase {
    action: PostListAccountAliasesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListAccountAliasesVersionEnum;
}
export declare class PostListAccountAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAccountAliasesRequest extends SpeakeasyBase {
    queryParams: PostListAccountAliasesQueryParams;
    headers: PostListAccountAliasesHeaders;
    request?: Uint8Array;
}
export declare class PostListAccountAliasesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
