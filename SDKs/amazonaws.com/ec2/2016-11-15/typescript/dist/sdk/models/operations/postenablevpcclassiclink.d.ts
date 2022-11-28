import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableVpcClassicLinkActionEnum {
    EnableVpcClassicLink = "EnableVpcClassicLink"
}
export declare enum PostEnableVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableVpcClassicLinkQueryParams extends SpeakeasyBase {
    action: PostEnableVpcClassicLinkActionEnum;
    version: PostEnableVpcClassicLinkVersionEnum;
}
export declare class PostEnableVpcClassicLinkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableVpcClassicLinkRequest extends SpeakeasyBase {
    queryParams: PostEnableVpcClassicLinkQueryParams;
    headers: PostEnableVpcClassicLinkHeaders;
    request?: Uint8Array;
}
export declare class PostEnableVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
