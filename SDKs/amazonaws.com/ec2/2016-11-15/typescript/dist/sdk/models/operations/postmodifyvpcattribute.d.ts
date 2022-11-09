import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyVpcAttributeActionEnum {
    ModifyVpcAttribute = "ModifyVpcAttribute"
}
export declare enum PostModifyVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpcAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyVpcAttributeActionEnum;
    version: PostModifyVpcAttributeVersionEnum;
}
export declare class PostModifyVpcAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpcAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyVpcAttributeQueryParams;
    headers: PostModifyVpcAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpcAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
