import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVpcEndpointServiceConfigurationActionEnum {
    ModifyVpcEndpointServiceConfiguration = "ModifyVpcEndpointServiceConfiguration"
}
export declare enum GetModifyVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcEndpointServiceConfigurationQueryParams extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    action: GetModifyVpcEndpointServiceConfigurationActionEnum;
    addGatewayLoadBalancerArn?: string[];
    addNetworkLoadBalancerArn?: string[];
    dryRun?: boolean;
    privateDnsName?: string;
    removeGatewayLoadBalancerArn?: string[];
    removeNetworkLoadBalancerArn?: string[];
    removePrivateDnsName?: boolean;
    serviceId: string;
    version: GetModifyVpcEndpointServiceConfigurationVersionEnum;
}
export declare class GetModifyVpcEndpointServiceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcEndpointServiceConfigurationQueryParams;
    headers: GetModifyVpcEndpointServiceConfigurationHeaders;
}
export declare class GetModifyVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
