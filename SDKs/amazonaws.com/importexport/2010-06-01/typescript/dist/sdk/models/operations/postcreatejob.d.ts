import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateJobActionEnum {
    CreateJob = "CreateJob"
}
export declare enum PostCreateJobOperationEnum {
    CreateJob = "CreateJob"
}
export declare enum PostCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class PostCreateJobQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostCreateJobActionEnum;
    operation: PostCreateJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostCreateJobVersionEnum;
}
export declare class PostCreateJobRequest extends SpeakeasyBase {
    queryParams: PostCreateJobQueryParams;
    request?: Uint8Array;
}
export declare class PostCreateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
