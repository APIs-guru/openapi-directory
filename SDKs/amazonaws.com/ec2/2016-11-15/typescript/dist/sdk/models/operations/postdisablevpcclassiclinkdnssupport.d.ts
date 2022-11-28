import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableVpcClassicLinkDnsSupportActionEnum {
    DisableVpcClassicLinkDnsSupport = "DisableVpcClassicLinkDnsSupport"
}
export declare enum PostDisableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
    action: PostDisableVpcClassicLinkDnsSupportActionEnum;
    version: PostDisableVpcClassicLinkDnsSupportVersionEnum;
}
export declare class PostDisableVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    queryParams: PostDisableVpcClassicLinkDnsSupportQueryParams;
    headers: PostDisableVpcClassicLinkDnsSupportHeaders;
    request?: Uint8Array;
}
export declare class PostDisableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
