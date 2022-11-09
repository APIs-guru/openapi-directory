import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAcceptVpcEndpointConnectionsActionEnum {
    AcceptVpcEndpointConnections = "AcceptVpcEndpointConnections"
}
export declare enum PostAcceptVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAcceptVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
    action: PostAcceptVpcEndpointConnectionsActionEnum;
    version: PostAcceptVpcEndpointConnectionsVersionEnum;
}
export declare class PostAcceptVpcEndpointConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAcceptVpcEndpointConnectionsRequest extends SpeakeasyBase {
    queryParams: PostAcceptVpcEndpointConnectionsQueryParams;
    headers: PostAcceptVpcEndpointConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostAcceptVpcEndpointConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
