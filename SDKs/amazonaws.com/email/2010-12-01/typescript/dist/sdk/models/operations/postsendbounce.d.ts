import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSendBounceActionEnum {
    SendBounce = "SendBounce"
}
export declare enum PostSendBounceVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSendBounceQueryParams extends SpeakeasyBase {
    action: PostSendBounceActionEnum;
    version: PostSendBounceVersionEnum;
}
export declare class PostSendBounceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendBounceRequest extends SpeakeasyBase {
    queryParams: PostSendBounceQueryParams;
    headers: PostSendBounceHeaders;
    request?: Uint8Array;
}
export declare class PostSendBounceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
