import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCancelJobActionEnum {
    CancelJob = "CancelJob"
}
export declare enum PostCancelJobOperationEnum {
    CancelJob = "CancelJob"
}
export declare enum PostCancelJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class PostCancelJobQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostCancelJobActionEnum;
    operation: PostCancelJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostCancelJobVersionEnum;
}
export declare class PostCancelJobRequest extends SpeakeasyBase {
    queryParams: PostCancelJobQueryParams;
    request?: Uint8Array;
}
export declare class PostCancelJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
