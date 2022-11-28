import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSendBulkTemplatedEmailActionEnum {
    SendBulkTemplatedEmail = "SendBulkTemplatedEmail"
}
export declare enum PostSendBulkTemplatedEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSendBulkTemplatedEmailQueryParams extends SpeakeasyBase {
    action: PostSendBulkTemplatedEmailActionEnum;
    version: PostSendBulkTemplatedEmailVersionEnum;
}
export declare class PostSendBulkTemplatedEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendBulkTemplatedEmailRequest extends SpeakeasyBase {
    queryParams: PostSendBulkTemplatedEmailQueryParams;
    headers: PostSendBulkTemplatedEmailHeaders;
    request?: Uint8Array;
}
export declare class PostSendBulkTemplatedEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
