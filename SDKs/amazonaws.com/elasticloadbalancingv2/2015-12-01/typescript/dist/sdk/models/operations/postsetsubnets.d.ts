import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetSubnetsActionEnum {
    SetSubnets = "SetSubnets"
}
export declare enum PostSetSubnetsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostSetSubnetsQueryParams extends SpeakeasyBase {
    action: PostSetSubnetsActionEnum;
    version: PostSetSubnetsVersionEnum;
}
export declare class PostSetSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetSubnetsRequest extends SpeakeasyBase {
    queryParams: PostSetSubnetsQueryParams;
    headers: PostSetSubnetsHeaders;
    request?: Uint8Array;
}
export declare class PostSetSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
