import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSendEmailActionEnum {
    SendEmail = "SendEmail"
}
export declare enum PostSendEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSendEmailQueryParams extends SpeakeasyBase {
    action: PostSendEmailActionEnum;
    version: PostSendEmailVersionEnum;
}
export declare class PostSendEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendEmailRequest extends SpeakeasyBase {
    queryParams: PostSendEmailQueryParams;
    headers: PostSendEmailHeaders;
    request?: Uint8Array;
}
export declare class PostSendEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
