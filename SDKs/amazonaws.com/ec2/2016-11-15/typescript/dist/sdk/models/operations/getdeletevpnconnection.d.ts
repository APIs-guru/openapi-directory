import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVpnConnectionActionEnum {
    DeleteVpnConnection = "DeleteVpnConnection"
}
export declare enum GetDeleteVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpnConnectionQueryParams extends SpeakeasyBase {
    action: GetDeleteVpnConnectionActionEnum;
    dryRun?: boolean;
    version: GetDeleteVpnConnectionVersionEnum;
    vpnConnectionId: string;
}
export declare class GetDeleteVpnConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpnConnectionRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpnConnectionQueryParams;
    headers: GetDeleteVpnConnectionHeaders;
}
export declare class GetDeleteVpnConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
