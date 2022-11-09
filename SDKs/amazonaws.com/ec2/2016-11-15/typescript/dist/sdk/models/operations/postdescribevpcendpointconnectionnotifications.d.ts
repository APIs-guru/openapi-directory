import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcEndpointConnectionNotificationsActionEnum {
    DescribeVpcEndpointConnectionNotifications = "DescribeVpcEndpointConnectionNotifications"
}
export declare enum PostDescribeVpcEndpointConnectionNotificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcEndpointConnectionNotificationsQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcEndpointConnectionNotificationsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeVpcEndpointConnectionNotificationsVersionEnum;
}
export declare class PostDescribeVpcEndpointConnectionNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcEndpointConnectionNotificationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcEndpointConnectionNotificationsQueryParams;
    headers: PostDescribeVpcEndpointConnectionNotificationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcEndpointConnectionNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
