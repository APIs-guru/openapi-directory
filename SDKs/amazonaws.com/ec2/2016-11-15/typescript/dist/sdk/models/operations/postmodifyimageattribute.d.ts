import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyImageAttributeActionEnum {
    ModifyImageAttribute = "ModifyImageAttribute"
}
export declare enum PostModifyImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyImageAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyImageAttributeActionEnum;
    version: PostModifyImageAttributeVersionEnum;
}
export declare class PostModifyImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyImageAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyImageAttributeQueryParams;
    headers: PostModifyImageAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyImageAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
