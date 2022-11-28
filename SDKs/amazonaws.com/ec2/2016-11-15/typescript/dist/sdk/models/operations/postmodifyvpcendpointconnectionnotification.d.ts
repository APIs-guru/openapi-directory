import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyVpcEndpointConnectionNotificationActionEnum {
    ModifyVpcEndpointConnectionNotification = "ModifyVpcEndpointConnectionNotification"
}
export declare enum PostModifyVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVpcEndpointConnectionNotificationQueryParams extends SpeakeasyBase {
    action: PostModifyVpcEndpointConnectionNotificationActionEnum;
    version: PostModifyVpcEndpointConnectionNotificationVersionEnum;
}
export declare class PostModifyVpcEndpointConnectionNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    queryParams: PostModifyVpcEndpointConnectionNotificationQueryParams;
    headers: PostModifyVpcEndpointConnectionNotificationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
