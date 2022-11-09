import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateAddressActionEnum {
    DisassociateAddress = "DisassociateAddress"
}
export declare enum PostDisassociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateAddressQueryParams extends SpeakeasyBase {
    action: PostDisassociateAddressActionEnum;
    version: PostDisassociateAddressVersionEnum;
}
export declare class PostDisassociateAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateAddressRequest extends SpeakeasyBase {
    queryParams: PostDisassociateAddressQueryParams;
    headers: PostDisassociateAddressHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
