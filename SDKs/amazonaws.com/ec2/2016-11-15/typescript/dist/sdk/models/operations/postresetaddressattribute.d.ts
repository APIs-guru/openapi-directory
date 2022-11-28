import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetAddressAttributeActionEnum {
    ResetAddressAttribute = "ResetAddressAttribute"
}
export declare enum PostResetAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetAddressAttributeQueryParams extends SpeakeasyBase {
    action: PostResetAddressAttributeActionEnum;
    version: PostResetAddressAttributeVersionEnum;
}
export declare class PostResetAddressAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetAddressAttributeRequest extends SpeakeasyBase {
    queryParams: PostResetAddressAttributeQueryParams;
    headers: PostResetAddressAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostResetAddressAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
