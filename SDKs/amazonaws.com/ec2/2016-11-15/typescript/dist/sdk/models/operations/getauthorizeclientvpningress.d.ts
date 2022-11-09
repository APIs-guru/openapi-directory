import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAuthorizeClientVpnIngressActionEnum {
    AuthorizeClientVpnIngress = "AuthorizeClientVpnIngress"
}
export declare enum GetAuthorizeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAuthorizeClientVpnIngressQueryParams extends SpeakeasyBase {
    accessGroupId?: string;
    action: GetAuthorizeClientVpnIngressActionEnum;
    authorizeAllGroups?: boolean;
    clientToken?: string;
    clientVpnEndpointId: string;
    description?: string;
    dryRun?: boolean;
    targetNetworkCidr: string;
    version: GetAuthorizeClientVpnIngressVersionEnum;
}
export declare class GetAuthorizeClientVpnIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeClientVpnIngressRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeClientVpnIngressQueryParams;
    headers: GetAuthorizeClientVpnIngressHeaders;
}
export declare class GetAuthorizeClientVpnIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
