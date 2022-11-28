import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachNetworkInterfaceActionEnum {
    AttachNetworkInterface = "AttachNetworkInterface"
}
export declare enum PostAttachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAttachNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: PostAttachNetworkInterfaceActionEnum;
    version: PostAttachNetworkInterfaceVersionEnum;
}
export declare class PostAttachNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: PostAttachNetworkInterfaceQueryParams;
    headers: PostAttachNetworkInterfaceHeaders;
    request?: Uint8Array;
}
export declare class PostAttachNetworkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
