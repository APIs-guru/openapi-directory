import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateTransitGatewayConnectPeerActionEnum {
    CreateTransitGatewayConnectPeer = "CreateTransitGatewayConnectPeer"
}
export declare enum PostCreateTransitGatewayConnectPeerVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayConnectPeerQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayConnectPeerActionEnum;
    version: PostCreateTransitGatewayConnectPeerVersionEnum;
}
export declare class PostCreateTransitGatewayConnectPeerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayConnectPeerRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayConnectPeerQueryParams;
    headers: PostCreateTransitGatewayConnectPeerHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayConnectPeerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
