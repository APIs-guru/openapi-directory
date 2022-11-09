import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTransitGatewayConnectPeerActionEnum {
    DeleteTransitGatewayConnectPeer = "DeleteTransitGatewayConnectPeer"
}
export declare enum GetDeleteTransitGatewayConnectPeerVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayConnectPeerQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayConnectPeerActionEnum;
    dryRun?: boolean;
    transitGatewayConnectPeerId: string;
    version: GetDeleteTransitGatewayConnectPeerVersionEnum;
}
export declare class GetDeleteTransitGatewayConnectPeerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayConnectPeerRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayConnectPeerQueryParams;
    headers: GetDeleteTransitGatewayConnectPeerHeaders;
}
export declare class GetDeleteTransitGatewayConnectPeerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
