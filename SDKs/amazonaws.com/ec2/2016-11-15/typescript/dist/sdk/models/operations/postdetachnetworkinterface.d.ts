import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDetachNetworkInterfaceActionEnum {
    DetachNetworkInterface = "DetachNetworkInterface"
}
export declare enum PostDetachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDetachNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: PostDetachNetworkInterfaceActionEnum;
    version: PostDetachNetworkInterfaceVersionEnum;
}
export declare class PostDetachNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: PostDetachNetworkInterfaceQueryParams;
    headers: PostDetachNetworkInterfaceHeaders;
    request?: Uint8Array;
}
export declare class PostDetachNetworkInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
