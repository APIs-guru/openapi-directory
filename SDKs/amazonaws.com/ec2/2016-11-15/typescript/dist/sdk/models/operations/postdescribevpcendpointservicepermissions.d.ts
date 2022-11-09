import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcEndpointServicePermissionsActionEnum {
    DescribeVpcEndpointServicePermissions = "DescribeVpcEndpointServicePermissions"
}
export declare enum PostDescribeVpcEndpointServicePermissionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcEndpointServicePermissionsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcEndpointServicePermissionsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcEndpointServicePermissionsVersionEnum;
}
export declare class PostDescribeVpcEndpointServicePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcEndpointServicePermissionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcEndpointServicePermissionsQueryParams;
    headers: PostDescribeVpcEndpointServicePermissionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcEndpointServicePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
