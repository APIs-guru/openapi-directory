import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRejectVpcEndpointConnectionsActionEnum {
    RejectVpcEndpointConnections = "RejectVpcEndpointConnections"
}
export declare enum PostRejectVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRejectVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
    action: PostRejectVpcEndpointConnectionsActionEnum;
    version: PostRejectVpcEndpointConnectionsVersionEnum;
}
export declare class PostRejectVpcEndpointConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRejectVpcEndpointConnectionsRequest extends SpeakeasyBase {
    queryParams: PostRejectVpcEndpointConnectionsQueryParams;
    headers: PostRejectVpcEndpointConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostRejectVpcEndpointConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
