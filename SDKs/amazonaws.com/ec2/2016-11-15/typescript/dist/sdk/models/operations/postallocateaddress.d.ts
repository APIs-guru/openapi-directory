import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAllocateAddressActionEnum {
    AllocateAddress = "AllocateAddress"
}
export declare enum PostAllocateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAllocateAddressQueryParams extends SpeakeasyBase {
    action: PostAllocateAddressActionEnum;
    version: PostAllocateAddressVersionEnum;
}
export declare class PostAllocateAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAllocateAddressRequest extends SpeakeasyBase {
    queryParams: PostAllocateAddressQueryParams;
    headers: PostAllocateAddressHeaders;
    request?: Uint8Array;
}
export declare class PostAllocateAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
