import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReleaseAddressActionEnum {
    ReleaseAddress = "ReleaseAddress"
}
export declare enum PostReleaseAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReleaseAddressQueryParams extends SpeakeasyBase {
    action: PostReleaseAddressActionEnum;
    version: PostReleaseAddressVersionEnum;
}
export declare class PostReleaseAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReleaseAddressRequest extends SpeakeasyBase {
    queryParams: PostReleaseAddressQueryParams;
    headers: PostReleaseAddressHeaders;
    request?: Uint8Array;
}
export declare class PostReleaseAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
