import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTransitGatewayConnectActionEnum {
    DeleteTransitGatewayConnect = "DeleteTransitGatewayConnect"
}
export declare enum GetDeleteTransitGatewayConnectVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayConnectQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayConnectActionEnum;
    dryRun?: boolean;
    transitGatewayAttachmentId: string;
    version: GetDeleteTransitGatewayConnectVersionEnum;
}
export declare class GetDeleteTransitGatewayConnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayConnectRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayConnectQueryParams;
    headers: GetDeleteTransitGatewayConnectHeaders;
}
export declare class GetDeleteTransitGatewayConnectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
