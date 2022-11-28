import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListCustomVerificationEmailTemplatesActionEnum {
    ListCustomVerificationEmailTemplates = "ListCustomVerificationEmailTemplates"
}
export declare enum PostListCustomVerificationEmailTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListCustomVerificationEmailTemplatesQueryParams extends SpeakeasyBase {
    action: PostListCustomVerificationEmailTemplatesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostListCustomVerificationEmailTemplatesVersionEnum;
}
export declare class PostListCustomVerificationEmailTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
    queryParams: PostListCustomVerificationEmailTemplatesQueryParams;
    headers: PostListCustomVerificationEmailTemplatesHeaders;
    request?: Uint8Array;
}
export declare class PostListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
