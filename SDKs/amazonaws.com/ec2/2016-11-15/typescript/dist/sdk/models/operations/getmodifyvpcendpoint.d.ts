import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVpcEndpointActionEnum {
    ModifyVpcEndpoint = "ModifyVpcEndpoint"
}
export declare enum GetModifyVpcEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcEndpointQueryParams extends SpeakeasyBase {
    action: GetModifyVpcEndpointActionEnum;
    addRouteTableId?: string[];
    addSecurityGroupId?: string[];
    addSubnetId?: string[];
    dryRun?: boolean;
    policyDocument?: string;
    privateDnsEnabled?: boolean;
    removeRouteTableId?: string[];
    removeSecurityGroupId?: string[];
    removeSubnetId?: string[];
    resetPolicy?: boolean;
    version: GetModifyVpcEndpointVersionEnum;
    vpcEndpointId: string;
}
export declare class GetModifyVpcEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcEndpointRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcEndpointQueryParams;
    headers: GetModifyVpcEndpointHeaders;
}
export declare class GetModifyVpcEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
