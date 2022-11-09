import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableVpcClassicLinkDnsSupportActionEnum {
    EnableVpcClassicLinkDnsSupport = "EnableVpcClassicLinkDnsSupport"
}
export declare enum PostEnableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableVpcClassicLinkDnsSupportQueryParams extends SpeakeasyBase {
    action: PostEnableVpcClassicLinkDnsSupportActionEnum;
    version: PostEnableVpcClassicLinkDnsSupportVersionEnum;
}
export declare class PostEnableVpcClassicLinkDnsSupportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    queryParams: PostEnableVpcClassicLinkDnsSupportQueryParams;
    headers: PostEnableVpcClassicLinkDnsSupportHeaders;
    request?: Uint8Array;
}
export declare class PostEnableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
