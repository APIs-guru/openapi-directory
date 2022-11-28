import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVerifiedEmailAddressActionEnum {
    DeleteVerifiedEmailAddress = "DeleteVerifiedEmailAddress"
}
export declare enum PostDeleteVerifiedEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteVerifiedEmailAddressQueryParams extends SpeakeasyBase {
    action: PostDeleteVerifiedEmailAddressActionEnum;
    version: PostDeleteVerifiedEmailAddressVersionEnum;
}
export declare class PostDeleteVerifiedEmailAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVerifiedEmailAddressRequest extends SpeakeasyBase {
    queryParams: PostDeleteVerifiedEmailAddressQueryParams;
    headers: PostDeleteVerifiedEmailAddressHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVerifiedEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
