import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetIdentityMailFromDomainAttributesActionEnum {
    GetIdentityMailFromDomainAttributes = "GetIdentityMailFromDomainAttributes"
}
export declare enum PostGetIdentityMailFromDomainAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetIdentityMailFromDomainAttributesQueryParams extends SpeakeasyBase {
    action: PostGetIdentityMailFromDomainAttributesActionEnum;
    version: PostGetIdentityMailFromDomainAttributesVersionEnum;
}
export declare class PostGetIdentityMailFromDomainAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetIdentityMailFromDomainAttributesRequest extends SpeakeasyBase {
    queryParams: PostGetIdentityMailFromDomainAttributesQueryParams;
    headers: PostGetIdentityMailFromDomainAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostGetIdentityMailFromDomainAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
