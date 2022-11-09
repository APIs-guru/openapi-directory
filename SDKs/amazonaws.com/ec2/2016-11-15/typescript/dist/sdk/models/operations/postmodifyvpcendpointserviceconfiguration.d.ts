import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyVpcEndpointServiceConfigurationActionEnum {
    ModifyVpcEndpointServiceConfiguration = "ModifyVpcEndpointServiceConfiguration"
}
export declare enum PostModifyVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpcEndpointServiceConfigurationQueryParams extends SpeakeasyBase {
    action: PostModifyVpcEndpointServiceConfigurationActionEnum;
    version: PostModifyVpcEndpointServiceConfigurationVersionEnum;
}
export declare class PostModifyVpcEndpointServiceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
    queryParams: PostModifyVpcEndpointServiceConfigurationQueryParams;
    headers: PostModifyVpcEndpointServiceConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
