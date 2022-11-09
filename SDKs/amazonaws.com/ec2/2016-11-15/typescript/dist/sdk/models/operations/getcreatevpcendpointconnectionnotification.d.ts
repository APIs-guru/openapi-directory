import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateVpcEndpointConnectionNotificationActionEnum {
    CreateVpcEndpointConnectionNotification = "CreateVpcEndpointConnectionNotification"
}
export declare enum GetCreateVpcEndpointConnectionNotificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateVpcEndpointConnectionNotificationQueryParams extends SpeakeasyBase {
    action: GetCreateVpcEndpointConnectionNotificationActionEnum;
    clientToken?: string;
    connectionEvents: string[];
    connectionNotificationArn: string;
    dryRun?: boolean;
    serviceId?: string;
    version: GetCreateVpcEndpointConnectionNotificationVersionEnum;
    vpcEndpointId?: string;
}
export declare class GetCreateVpcEndpointConnectionNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateVpcEndpointConnectionNotificationRequest extends SpeakeasyBase {
    queryParams: GetCreateVpcEndpointConnectionNotificationQueryParams;
    headers: GetCreateVpcEndpointConnectionNotificationHeaders;
}
export declare class GetCreateVpcEndpointConnectionNotificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
