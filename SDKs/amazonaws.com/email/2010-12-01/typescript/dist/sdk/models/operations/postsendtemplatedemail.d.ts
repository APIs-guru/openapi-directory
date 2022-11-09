import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSendTemplatedEmailActionEnum {
    SendTemplatedEmail = "SendTemplatedEmail"
}
export declare enum PostSendTemplatedEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSendTemplatedEmailQueryParams extends SpeakeasyBase {
    action: PostSendTemplatedEmailActionEnum;
    version: PostSendTemplatedEmailVersionEnum;
}
export declare class PostSendTemplatedEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendTemplatedEmailRequest extends SpeakeasyBase {
    queryParams: PostSendTemplatedEmailQueryParams;
    headers: PostSendTemplatedEmailHeaders;
    request?: Uint8Array;
}
export declare class PostSendTemplatedEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
