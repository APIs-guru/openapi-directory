import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateNetworkInterfacePermissionActionEnum {
    CreateNetworkInterfacePermission = "CreateNetworkInterfacePermission"
}
export declare enum PostCreateNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
    action: PostCreateNetworkInterfacePermissionActionEnum;
    version: PostCreateNetworkInterfacePermissionVersionEnum;
}
export declare class PostCreateNetworkInterfacePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateNetworkInterfacePermissionRequest extends SpeakeasyBase {
    queryParams: PostCreateNetworkInterfacePermissionQueryParams;
    headers: PostCreateNetworkInterfacePermissionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateNetworkInterfacePermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
