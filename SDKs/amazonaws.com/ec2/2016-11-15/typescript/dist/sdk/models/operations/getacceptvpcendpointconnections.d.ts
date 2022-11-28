import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAcceptVpcEndpointConnectionsActionEnum {
    AcceptVpcEndpointConnections = "AcceptVpcEndpointConnections"
}
export declare enum GetAcceptVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAcceptVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
    action: GetAcceptVpcEndpointConnectionsActionEnum;
    dryRun?: boolean;
    serviceId: string;
    version: GetAcceptVpcEndpointConnectionsVersionEnum;
    vpcEndpointId: string[];
}
export declare class GetAcceptVpcEndpointConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAcceptVpcEndpointConnectionsRequest extends SpeakeasyBase {
    queryParams: GetAcceptVpcEndpointConnectionsQueryParams;
    headers: GetAcceptVpcEndpointConnectionsHeaders;
}
export declare class GetAcceptVpcEndpointConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
