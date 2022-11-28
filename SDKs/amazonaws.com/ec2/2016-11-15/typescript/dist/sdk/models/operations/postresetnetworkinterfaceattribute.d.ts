import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetNetworkInterfaceAttributeActionEnum {
    ResetNetworkInterfaceAttribute = "ResetNetworkInterfaceAttribute"
}
export declare enum PostResetNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
    action: PostResetNetworkInterfaceAttributeActionEnum;
    version: PostResetNetworkInterfaceAttributeVersionEnum;
}
export declare class PostResetNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    queryParams: PostResetNetworkInterfaceAttributeQueryParams;
    headers: PostResetNetworkInterfaceAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostResetNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
