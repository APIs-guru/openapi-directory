import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}
export declare enum PostVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostVerifyEmailIdentityQueryParams extends SpeakeasyBase {
    action: PostVerifyEmailIdentityActionEnum;
    version: PostVerifyEmailIdentityVersionEnum;
}
export declare class PostVerifyEmailIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostVerifyEmailIdentityRequest extends SpeakeasyBase {
    queryParams: PostVerifyEmailIdentityQueryParams;
    headers: PostVerifyEmailIdentityHeaders;
    request?: Uint8Array;
}
export declare class PostVerifyEmailIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
