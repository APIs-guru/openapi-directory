import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteNetworkInterfacePermissionActionEnum {
    DeleteNetworkInterfacePermission = "DeleteNetworkInterfacePermission"
}
export declare enum PostDeleteNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
    action: PostDeleteNetworkInterfacePermissionActionEnum;
    version: PostDeleteNetworkInterfacePermissionVersionEnum;
}
export declare class PostDeleteNetworkInterfacePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNetworkInterfacePermissionRequest extends SpeakeasyBase {
    queryParams: PostDeleteNetworkInterfacePermissionQueryParams;
    headers: PostDeleteNetworkInterfacePermissionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNetworkInterfacePermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
