import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTerminateClientVpnConnectionsActionEnum {
    TerminateClientVpnConnections = "TerminateClientVpnConnections"
}
export declare enum PostTerminateClientVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostTerminateClientVpnConnectionsQueryParams extends SpeakeasyBase {
    action: PostTerminateClientVpnConnectionsActionEnum;
    version: PostTerminateClientVpnConnectionsVersionEnum;
}
export declare class PostTerminateClientVpnConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTerminateClientVpnConnectionsRequest extends SpeakeasyBase {
    queryParams: PostTerminateClientVpnConnectionsQueryParams;
    headers: PostTerminateClientVpnConnectionsHeaders;
    request?: Uint8Array;
}
export declare class PostTerminateClientVpnConnectionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
