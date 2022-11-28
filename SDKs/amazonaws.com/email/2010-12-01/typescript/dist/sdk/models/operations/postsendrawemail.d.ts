import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSendRawEmailActionEnum {
    SendRawEmail = "SendRawEmail"
}
export declare enum PostSendRawEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSendRawEmailQueryParams extends SpeakeasyBase {
    action: PostSendRawEmailActionEnum;
    version: PostSendRawEmailVersionEnum;
}
export declare class PostSendRawEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendRawEmailRequest extends SpeakeasyBase {
    queryParams: PostSendRawEmailQueryParams;
    headers: PostSendRawEmailHeaders;
    request?: Uint8Array;
}
export declare class PostSendRawEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
