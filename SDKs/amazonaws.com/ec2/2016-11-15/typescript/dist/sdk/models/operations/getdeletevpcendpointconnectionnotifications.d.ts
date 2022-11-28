import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteVpcEndpointConnectionNotificationsActionEnum {
    DeleteVpcEndpointConnectionNotifications = "DeleteVpcEndpointConnectionNotifications"
}
export declare enum GetDeleteVpcEndpointConnectionNotificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpcEndpointConnectionNotificationsQueryParams extends SpeakeasyBase {
    action: GetDeleteVpcEndpointConnectionNotificationsActionEnum;
    connectionNotificationId: string[];
    dryRun?: boolean;
    version: GetDeleteVpcEndpointConnectionNotificationsVersionEnum;
}
export declare class GetDeleteVpcEndpointConnectionNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpcEndpointConnectionNotificationsRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpcEndpointConnectionNotificationsQueryParams;
    headers: GetDeleteVpcEndpointConnectionNotificationsHeaders;
}
export declare class GetDeleteVpcEndpointConnectionNotificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
