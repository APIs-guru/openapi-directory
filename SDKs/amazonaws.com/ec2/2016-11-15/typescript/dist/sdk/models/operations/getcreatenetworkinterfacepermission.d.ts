import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateNetworkInterfacePermissionActionEnum {
    CreateNetworkInterfacePermission = "CreateNetworkInterfacePermission"
}
export declare enum GetCreateNetworkInterfacePermissionPermissionEnum {
    InstanceAttach = "INSTANCE-ATTACH",
    EipAssociate = "EIP-ASSOCIATE"
}
export declare enum GetCreateNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
    action: GetCreateNetworkInterfacePermissionActionEnum;
    awsAccountId?: string;
    awsService?: string;
    dryRun?: boolean;
    networkInterfaceId: string;
    permission: GetCreateNetworkInterfacePermissionPermissionEnum;
    version: GetCreateNetworkInterfacePermissionVersionEnum;
}
export declare class GetCreateNetworkInterfacePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateNetworkInterfacePermissionRequest extends SpeakeasyBase {
    queryParams: GetCreateNetworkInterfacePermissionQueryParams;
    headers: GetCreateNetworkInterfacePermissionHeaders;
}
export declare class GetCreateNetworkInterfacePermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
