import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetIdentityVerificationAttributesActionEnum {
    GetIdentityVerificationAttributes = "GetIdentityVerificationAttributes"
}
export declare enum PostGetIdentityVerificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetIdentityVerificationAttributesQueryParams extends SpeakeasyBase {
    action: PostGetIdentityVerificationAttributesActionEnum;
    version: PostGetIdentityVerificationAttributesVersionEnum;
}
export declare class PostGetIdentityVerificationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetIdentityVerificationAttributesRequest extends SpeakeasyBase {
    queryParams: PostGetIdentityVerificationAttributesQueryParams;
    headers: PostGetIdentityVerificationAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostGetIdentityVerificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
