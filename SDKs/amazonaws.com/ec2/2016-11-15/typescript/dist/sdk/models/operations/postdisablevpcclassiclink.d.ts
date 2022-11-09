import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisableVpcClassicLinkActionEnum {
    DisableVpcClassicLink = "DisableVpcClassicLink"
}
export declare enum PostDisableVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableVpcClassicLinkQueryParams extends SpeakeasyBase {
    action: PostDisableVpcClassicLinkActionEnum;
    version: PostDisableVpcClassicLinkVersionEnum;
}
export declare class PostDisableVpcClassicLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableVpcClassicLinkRequest extends SpeakeasyBase {
    queryParams: PostDisableVpcClassicLinkQueryParams;
    headers: PostDisableVpcClassicLinkHeaders;
    request?: Uint8Array;
}
export declare class PostDisableVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
