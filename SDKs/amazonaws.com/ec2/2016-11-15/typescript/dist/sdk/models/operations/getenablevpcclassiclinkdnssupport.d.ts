import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableVpcClassicLinkDnsSupportActionEnum {
    EnableVpcClassicLinkDnsSupport = "EnableVpcClassicLinkDnsSupport"
}
export declare enum GetEnableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
    action: GetEnableVpcClassicLinkDnsSupportActionEnum;
    version: GetEnableVpcClassicLinkDnsSupportVersionEnum;
    vpcId?: string;
}
export declare class GetEnableVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    queryParams: GetEnableVpcClassicLinkDnsSupportQueryParams;
    headers: GetEnableVpcClassicLinkDnsSupportHeaders;
}
export declare class GetEnableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
