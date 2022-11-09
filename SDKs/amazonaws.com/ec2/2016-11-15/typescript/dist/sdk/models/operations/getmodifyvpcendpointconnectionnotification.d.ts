import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVpcEndpointConnectionNotificationActionEnum {
    ModifyVpcEndpointConnectionNotification = "ModifyVpcEndpointConnectionNotification"
}
export declare enum GetModifyVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVpcEndpointConnectionNotificationQueryParams extends SpeakeasyBase {
    action: GetModifyVpcEndpointConnectionNotificationActionEnum;
    connectionEvents?: string[];
    connectionNotificationArn?: string;
    connectionNotificationId: string;
    dryRun?: boolean;
    version: GetModifyVpcEndpointConnectionNotificationVersionEnum;
}
export declare class GetModifyVpcEndpointConnectionNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    queryParams: GetModifyVpcEndpointConnectionNotificationQueryParams;
    headers: GetModifyVpcEndpointConnectionNotificationHeaders;
}
export declare class GetModifyVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
