import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateNetworkInterfaceActionEnum {
    CreateNetworkInterface = "CreateNetworkInterface"
}
export declare enum PostCreateNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateNetworkInterfaceQueryParams extends SpeakeasyBase {
    action: PostCreateNetworkInterfaceActionEnum;
    version: PostCreateNetworkInterfaceVersionEnum;
}
export declare class PostCreateNetworkInterfaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateNetworkInterfaceRequest extends SpeakeasyBase {
    queryParams: PostCreateNetworkInterfaceQueryParams;
    headers: PostCreateNetworkInterfaceHeaders;
    request?: Uint8Array;
}
export declare class PostCreateNetworkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
