import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssociateAddressActionEnum {
    AssociateAddress = "AssociateAddress"
}
export declare enum PostAssociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateAddressQueryParams extends SpeakeasyBase {
    action: PostAssociateAddressActionEnum;
    version: PostAssociateAddressVersionEnum;
}
export declare class PostAssociateAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateAddressRequest extends SpeakeasyBase {
    queryParams: PostAssociateAddressQueryParams;
    headers: PostAssociateAddressHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
