import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListTemplatesActionEnum {
    ListTemplates = "ListTemplates"
}
export declare enum PostListTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListTemplatesQueryParams extends SpeakeasyBase {
    action: PostListTemplatesActionEnum;
    version: PostListTemplatesVersionEnum;
}
export declare class PostListTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListTemplatesRequest extends SpeakeasyBase {
    queryParams: PostListTemplatesQueryParams;
    headers: PostListTemplatesHeaders;
    request?: Uint8Array;
}
export declare class PostListTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
