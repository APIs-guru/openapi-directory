import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVpcEndpointServiceConfigurationsActionEnum {
    DeleteVpcEndpointServiceConfigurations = "DeleteVpcEndpointServiceConfigurations"
}
export declare enum PostDeleteVpcEndpointServiceConfigurationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpcEndpointServiceConfigurationsQueryParams extends SpeakeasyBase {
    action: PostDeleteVpcEndpointServiceConfigurationsActionEnum;
    version: PostDeleteVpcEndpointServiceConfigurationsVersionEnum;
}
export declare class PostDeleteVpcEndpointServiceConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpcEndpointServiceConfigurationsRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpcEndpointServiceConfigurationsQueryParams;
    headers: PostDeleteVpcEndpointServiceConfigurationsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpcEndpointServiceConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
