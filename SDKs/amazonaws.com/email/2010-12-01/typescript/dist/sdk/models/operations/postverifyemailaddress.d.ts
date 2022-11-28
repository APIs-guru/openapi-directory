import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostVerifyEmailAddressActionEnum {
    VerifyEmailAddress = "VerifyEmailAddress"
}
export declare enum PostVerifyEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostVerifyEmailAddressQueryParams extends SpeakeasyBase {
    action: PostVerifyEmailAddressActionEnum;
    version: PostVerifyEmailAddressVersionEnum;
}
export declare class PostVerifyEmailAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostVerifyEmailAddressRequest extends SpeakeasyBase {
    queryParams: PostVerifyEmailAddressQueryParams;
    headers: PostVerifyEmailAddressHeaders;
    request?: Uint8Array;
}
export declare class PostVerifyEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
