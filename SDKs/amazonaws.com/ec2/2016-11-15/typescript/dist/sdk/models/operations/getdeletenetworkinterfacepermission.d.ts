import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteNetworkInterfacePermissionActionEnum {
    DeleteNetworkInterfacePermission = "DeleteNetworkInterfacePermission"
}
export declare enum GetDeleteNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
    action: GetDeleteNetworkInterfacePermissionActionEnum;
    dryRun?: boolean;
    force?: boolean;
    networkInterfacePermissionId: string;
    version: GetDeleteNetworkInterfacePermissionVersionEnum;
}
export declare class GetDeleteNetworkInterfacePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNetworkInterfacePermissionRequest extends SpeakeasyBase {
    queryParams: GetDeleteNetworkInterfacePermissionQueryParams;
    headers: GetDeleteNetworkInterfacePermissionHeaders;
}
export declare class GetDeleteNetworkInterfacePermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
