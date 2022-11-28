import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifySubnetAttributeActionEnum {
    ModifySubnetAttribute = "ModifySubnetAttribute"
}
export declare enum PostModifySubnetAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifySubnetAttributeQueryParams extends SpeakeasyBase {
    action: PostModifySubnetAttributeActionEnum;
    version: PostModifySubnetAttributeVersionEnum;
}
export declare class PostModifySubnetAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifySubnetAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifySubnetAttributeQueryParams;
    headers: PostModifySubnetAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifySubnetAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
