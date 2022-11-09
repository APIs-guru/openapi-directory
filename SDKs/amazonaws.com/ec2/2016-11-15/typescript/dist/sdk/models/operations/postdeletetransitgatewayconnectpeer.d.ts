import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTransitGatewayConnectPeerActionEnum {
    DeleteTransitGatewayConnectPeer = "DeleteTransitGatewayConnectPeer"
}
export declare enum PostDeleteTransitGatewayConnectPeerVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayConnectPeerQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayConnectPeerActionEnum;
    version: PostDeleteTransitGatewayConnectPeerVersionEnum;
}
export declare class PostDeleteTransitGatewayConnectPeerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayConnectPeerRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayConnectPeerQueryParams;
    headers: PostDeleteTransitGatewayConnectPeerHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayConnectPeerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
