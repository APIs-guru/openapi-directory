import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetIdentityMailFromDomainActionEnum {
    SetIdentityMailFromDomain = "SetIdentityMailFromDomain"
}
export declare enum PostSetIdentityMailFromDomainVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetIdentityMailFromDomainQueryParams extends SpeakeasyBase {
    action: PostSetIdentityMailFromDomainActionEnum;
    version: PostSetIdentityMailFromDomainVersionEnum;
}
export declare class PostSetIdentityMailFromDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetIdentityMailFromDomainRequest extends SpeakeasyBase {
    queryParams: PostSetIdentityMailFromDomainQueryParams;
    headers: PostSetIdentityMailFromDomainHeaders;
    request?: Uint8Array;
}
export declare class PostSetIdentityMailFromDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
