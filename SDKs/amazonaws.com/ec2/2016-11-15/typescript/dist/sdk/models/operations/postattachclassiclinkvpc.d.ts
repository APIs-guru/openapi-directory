import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAttachClassicLinkVpcActionEnum {
    AttachClassicLinkVpc = "AttachClassicLinkVpc"
}
export declare enum PostAttachClassicLinkVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAttachClassicLinkVpcQueryParams extends SpeakeasyBase {
    action: PostAttachClassicLinkVpcActionEnum;
    version: PostAttachClassicLinkVpcVersionEnum;
}
export declare class PostAttachClassicLinkVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachClassicLinkVpcRequest extends SpeakeasyBase {
    queryParams: PostAttachClassicLinkVpcQueryParams;
    headers: PostAttachClassicLinkVpcHeaders;
    request?: Uint8Array;
}
export declare class PostAttachClassicLinkVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
