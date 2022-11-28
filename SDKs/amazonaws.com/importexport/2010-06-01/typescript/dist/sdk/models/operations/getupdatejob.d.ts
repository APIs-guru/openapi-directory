import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}
export declare enum GetUpdateJobJobTypeEnum {
    Import = "Import",
    Export = "Export"
}
export declare enum GetUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}
export declare enum GetUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GetUpdateJobQueryParams extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GetUpdateJobActionEnum;
    jobId: string;
    jobType: GetUpdateJobJobTypeEnum;
    manifest: string;
    operation: GetUpdateJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    validateOnly: boolean;
    version: GetUpdateJobVersionEnum;
}
export declare class GetUpdateJobRequest extends SpeakeasyBase {
    queryParams: GetUpdateJobQueryParams;
}
export declare class GetUpdateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
