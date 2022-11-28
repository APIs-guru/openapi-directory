import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListVerifiedEmailAddressesActionEnum {
    ListVerifiedEmailAddresses = "ListVerifiedEmailAddresses"
}
export declare enum PostListVerifiedEmailAddressesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListVerifiedEmailAddressesQueryParams extends SpeakeasyBase {
    action: PostListVerifiedEmailAddressesActionEnum;
    version: PostListVerifiedEmailAddressesVersionEnum;
}
export declare class PostListVerifiedEmailAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListVerifiedEmailAddressesRequest extends SpeakeasyBase {
    queryParams: PostListVerifiedEmailAddressesQueryParams;
    headers: PostListVerifiedEmailAddressesHeaders;
}
export declare class PostListVerifiedEmailAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
