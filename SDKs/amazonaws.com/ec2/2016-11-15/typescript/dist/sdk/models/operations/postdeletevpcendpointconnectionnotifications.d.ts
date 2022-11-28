import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteVpcEndpointConnectionNotificationsActionEnum {
    DeleteVpcEndpointConnectionNotifications = "DeleteVpcEndpointConnectionNotifications"
}
export declare enum PostDeleteVpcEndpointConnectionNotificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteVpcEndpointConnectionNotificationsQueryParams extends SpeakeasyBase {
    action: PostDeleteVpcEndpointConnectionNotificationsActionEnum;
    version: PostDeleteVpcEndpointConnectionNotificationsVersionEnum;
}
export declare class PostDeleteVpcEndpointConnectionNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVpcEndpointConnectionNotificationsRequest extends SpeakeasyBase {
    queryParams: PostDeleteVpcEndpointConnectionNotificationsQueryParams;
    headers: PostDeleteVpcEndpointConnectionNotificationsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVpcEndpointConnectionNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
