import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVpcEndpointServiceConfigurationsActionEnum {
    DeleteVpcEndpointServiceConfigurations = "DeleteVpcEndpointServiceConfigurations"
}
export declare enum GetDeleteVpcEndpointServiceConfigurationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpcEndpointServiceConfigurationsQueryParams extends SpeakeasyBase {
    action: GetDeleteVpcEndpointServiceConfigurationsActionEnum;
    dryRun?: boolean;
    serviceId: string[];
    version: GetDeleteVpcEndpointServiceConfigurationsVersionEnum;
}
export declare class GetDeleteVpcEndpointServiceConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpcEndpointServiceConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpcEndpointServiceConfigurationsQueryParams;
    headers: GetDeleteVpcEndpointServiceConfigurationsHeaders;
}
export declare class GetDeleteVpcEndpointServiceConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
