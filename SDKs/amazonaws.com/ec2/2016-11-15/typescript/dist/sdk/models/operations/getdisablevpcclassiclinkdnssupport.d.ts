import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisableVpcClassicLinkDnsSupportActionEnum {
    DisableVpcClassicLinkDnsSupport = "DisableVpcClassicLinkDnsSupport"
}
export declare enum GetDisableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
    action: GetDisableVpcClassicLinkDnsSupportActionEnum;
    version: GetDisableVpcClassicLinkDnsSupportVersionEnum;
    vpcId?: string;
}
export declare class GetDisableVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    queryParams: GetDisableVpcClassicLinkDnsSupportQueryParams;
    headers: GetDisableVpcClassicLinkDnsSupportHeaders;
}
export declare class GetDisableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
