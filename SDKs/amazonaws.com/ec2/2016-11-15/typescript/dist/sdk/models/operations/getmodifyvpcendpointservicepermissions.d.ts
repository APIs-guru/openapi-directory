import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVpcEndpointServicePermissionsActionEnum {
    ModifyVpcEndpointServicePermissions = "ModifyVpcEndpointServicePermissions"
}
export declare enum GetModifyVpcEndpointServicePermissionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcEndpointServicePermissionsQueryParams extends SpeakeasyBase {
    action: GetModifyVpcEndpointServicePermissionsActionEnum;
    addAllowedPrincipals?: string[];
    dryRun?: boolean;
    removeAllowedPrincipals?: string[];
    serviceId: string;
    version: GetModifyVpcEndpointServicePermissionsVersionEnum;
}
export declare class GetModifyVpcEndpointServicePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcEndpointServicePermissionsRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcEndpointServicePermissionsQueryParams;
    headers: GetModifyVpcEndpointServicePermissionsHeaders;
}
export declare class GetModifyVpcEndpointServicePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
