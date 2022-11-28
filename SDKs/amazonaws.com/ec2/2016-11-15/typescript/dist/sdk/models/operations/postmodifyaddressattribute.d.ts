import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyAddressAttributeActionEnum {
    ModifyAddressAttribute = "ModifyAddressAttribute"
}
export declare enum PostModifyAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyAddressAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyAddressAttributeActionEnum;
    version: PostModifyAddressAttributeVersionEnum;
}
export declare class PostModifyAddressAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyAddressAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyAddressAttributeQueryParams;
    headers: PostModifyAddressAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyAddressAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
