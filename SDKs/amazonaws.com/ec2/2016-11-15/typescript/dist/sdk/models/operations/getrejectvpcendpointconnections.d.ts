import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRejectVpcEndpointConnectionsActionEnum {
    RejectVpcEndpointConnections = "RejectVpcEndpointConnections"
}
export declare enum GetRejectVpcEndpointConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRejectVpcEndpointConnectionsQueryParams extends SpeakeasyBase {
    action: GetRejectVpcEndpointConnectionsActionEnum;
    dryRun?: boolean;
    serviceId: string;
    version: GetRejectVpcEndpointConnectionsVersionEnum;
    vpcEndpointId: string[];
}
export declare class GetRejectVpcEndpointConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRejectVpcEndpointConnectionsRequest extends SpeakeasyBase {
    queryParams: GetRejectVpcEndpointConnectionsQueryParams;
    headers: GetRejectVpcEndpointConnectionsHeaders;
}
export declare class GetRejectVpcEndpointConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
