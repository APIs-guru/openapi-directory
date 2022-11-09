import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCancelJobActionEnum {
    CancelJob = "CancelJob"
}
export declare enum GetCancelJobOperationEnum {
    CancelJob = "CancelJob"
}
export declare enum GetCancelJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GetCancelJobQueryParams extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GetCancelJobActionEnum;
    jobId: string;
    operation: GetCancelJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetCancelJobVersionEnum;
}
export declare class GetCancelJobRequest extends SpeakeasyBase {
    queryParams: GetCancelJobQueryParams;
}
export declare class GetCancelJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
