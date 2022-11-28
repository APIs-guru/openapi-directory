import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSendCustomVerificationEmailActionEnum {
    SendCustomVerificationEmail = "SendCustomVerificationEmail"
}
export declare enum PostSendCustomVerificationEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSendCustomVerificationEmailQueryParams extends SpeakeasyBase {
    action: PostSendCustomVerificationEmailActionEnum;
    version: PostSendCustomVerificationEmailVersionEnum;
}
export declare class PostSendCustomVerificationEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendCustomVerificationEmailRequest extends SpeakeasyBase {
    queryParams: PostSendCustomVerificationEmailQueryParams;
    headers: PostSendCustomVerificationEmailHeaders;
    request?: Uint8Array;
}
export declare class PostSendCustomVerificationEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
