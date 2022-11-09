import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyInstanceAttributeActionEnum {
    ModifyInstanceAttribute = "ModifyInstanceAttribute"
}
export declare enum PostModifyInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyInstanceAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyInstanceAttributeActionEnum;
    version: PostModifyInstanceAttributeVersionEnum;
}
export declare class PostModifyInstanceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyInstanceAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyInstanceAttributeQueryParams;
    headers: PostModifyInstanceAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyInstanceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
