import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyFpgaImageAttributeActionEnum {
    ModifyFpgaImageAttribute = "ModifyFpgaImageAttribute"
}
export declare enum PostModifyFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyFpgaImageAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyFpgaImageAttributeActionEnum;
    version: PostModifyFpgaImageAttributeVersionEnum;
}
export declare class PostModifyFpgaImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyFpgaImageAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyFpgaImageAttributeQueryParams;
    headers: PostModifyFpgaImageAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
