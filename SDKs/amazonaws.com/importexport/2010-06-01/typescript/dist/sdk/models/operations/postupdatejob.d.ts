import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}
export declare enum PostUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}
export declare enum PostUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class PostUpdateJobQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostUpdateJobActionEnum;
    operation: PostUpdateJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostUpdateJobVersionEnum;
}
export declare class PostUpdateJobRequest extends SpeakeasyBase {
    queryParams: PostUpdateJobQueryParams;
    request?: Uint8Array;
}
export declare class PostUpdateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
