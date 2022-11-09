import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRevokeClientVpnIngressActionEnum {
    RevokeClientVpnIngress = "RevokeClientVpnIngress"
}
export declare enum GetRevokeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRevokeClientVpnIngressQueryParams extends SpeakeasyBase {
    accessGroupId?: string;
    action: GetRevokeClientVpnIngressActionEnum;
    clientVpnEndpointId: string;
    dryRun?: boolean;
    revokeAllGroups?: boolean;
    targetNetworkCidr: string;
    version: GetRevokeClientVpnIngressVersionEnum;
}
export declare class GetRevokeClientVpnIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRevokeClientVpnIngressRequest extends SpeakeasyBase {
    queryParams: GetRevokeClientVpnIngressQueryParams;
    headers: GetRevokeClientVpnIngressHeaders;
}
export declare class GetRevokeClientVpnIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
