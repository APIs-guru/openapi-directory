import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyVpcEndpointServicePermissionsActionEnum {
    ModifyVpcEndpointServicePermissions = "ModifyVpcEndpointServicePermissions"
}
export declare enum PostModifyVpcEndpointServicePermissionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpcEndpointServicePermissionsQueryParams extends SpeakeasyBase {
    action: PostModifyVpcEndpointServicePermissionsActionEnum;
    version: PostModifyVpcEndpointServicePermissionsVersionEnum;
}
export declare class PostModifyVpcEndpointServicePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpcEndpointServicePermissionsRequest extends SpeakeasyBase {
    queryParams: PostModifyVpcEndpointServicePermissionsQueryParams;
    headers: PostModifyVpcEndpointServicePermissionsHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpcEndpointServicePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
