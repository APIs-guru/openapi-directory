import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachClassicLinkVpcActionEnum {
    DetachClassicLinkVpc = "DetachClassicLinkVpc"
}
export declare enum PostDetachClassicLinkVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDetachClassicLinkVpcQueryParams extends SpeakeasyBase {
    action: PostDetachClassicLinkVpcActionEnum;
    version: PostDetachClassicLinkVpcVersionEnum;
}
export declare class PostDetachClassicLinkVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachClassicLinkVpcRequest extends SpeakeasyBase {
    queryParams: PostDetachClassicLinkVpcQueryParams;
    headers: PostDetachClassicLinkVpcHeaders;
    request?: Uint8Array;
}
export declare class PostDetachClassicLinkVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
