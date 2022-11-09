import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateVpcEndpointServiceConfigurationActionEnum {
    CreateVpcEndpointServiceConfiguration = "CreateVpcEndpointServiceConfiguration"
}
export declare enum PostCreateVpcEndpointServiceConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateVpcEndpointServiceConfigurationQueryParams extends SpeakeasyBase {
    action: PostCreateVpcEndpointServiceConfigurationActionEnum;
    version: PostCreateVpcEndpointServiceConfigurationVersionEnum;
}
export declare class PostCreateVpcEndpointServiceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVpcEndpointServiceConfigurationRequest extends SpeakeasyBase {
    queryParams: PostCreateVpcEndpointServiceConfigurationQueryParams;
    headers: PostCreateVpcEndpointServiceConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVpcEndpointServiceConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
