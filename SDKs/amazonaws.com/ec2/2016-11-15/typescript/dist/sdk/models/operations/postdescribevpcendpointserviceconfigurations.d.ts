import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcEndpointServiceConfigurationsActionEnum {
    DescribeVpcEndpointServiceConfigurations = "DescribeVpcEndpointServiceConfigurations"
}
export declare enum PostDescribeVpcEndpointServiceConfigurationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcEndpointServiceConfigurationsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcEndpointServiceConfigurationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcEndpointServiceConfigurationsVersionEnum;
}
export declare class PostDescribeVpcEndpointServiceConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcEndpointServiceConfigurationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcEndpointServiceConfigurationsQueryParams;
    headers: PostDescribeVpcEndpointServiceConfigurationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcEndpointServiceConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
