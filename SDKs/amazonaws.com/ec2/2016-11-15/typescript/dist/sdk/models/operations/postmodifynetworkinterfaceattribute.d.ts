import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyNetworkInterfaceAttributeActionEnum {
    ModifyNetworkInterfaceAttribute = "ModifyNetworkInterfaceAttribute"
}
export declare enum PostModifyNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyNetworkInterfaceAttributeActionEnum;
    version: PostModifyNetworkInterfaceAttributeVersionEnum;
}
export declare class PostModifyNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyNetworkInterfaceAttributeQueryParams;
    headers: PostModifyNetworkInterfaceAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
