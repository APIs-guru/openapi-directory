import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostVerifyDomainIdentityActionEnum {
    VerifyDomainIdentity = "VerifyDomainIdentity"
}
export declare enum PostVerifyDomainIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostVerifyDomainIdentityQueryParams extends SpeakeasyBase {
    action: PostVerifyDomainIdentityActionEnum;
    version: PostVerifyDomainIdentityVersionEnum;
}
export declare class PostVerifyDomainIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostVerifyDomainIdentityRequest extends SpeakeasyBase {
    queryParams: PostVerifyDomainIdentityQueryParams;
    headers: PostVerifyDomainIdentityHeaders;
    request?: Uint8Array;
}
export declare class PostVerifyDomainIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
