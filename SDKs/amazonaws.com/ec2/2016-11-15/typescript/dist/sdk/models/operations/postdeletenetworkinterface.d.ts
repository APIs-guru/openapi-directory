import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteNetworkInterfaceActionEnum {
    DeleteNetworkInterface = "DeleteNetworkInterface"
}
export declare enum PostDeleteNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: PostDeleteNetworkInterfaceActionEnum;
    version: PostDeleteNetworkInterfaceVersionEnum;
}
export declare class PostDeleteNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: PostDeleteNetworkInterfaceQueryParams;
    headers: PostDeleteNetworkInterfaceHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNetworkInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
