import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateJobActionEnum {
    CreateJob = "CreateJob"
}
export declare enum GetCreateJobJobTypeEnum {
    Import = "Import",
    Export = "Export"
}
export declare enum GetCreateJobOperationEnum {
    CreateJob = "CreateJob"
}
export declare enum GetCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GetCreateJobQueryParams extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GetCreateJobActionEnum;
    jobType: GetCreateJobJobTypeEnum;
    manifest: string;
    manifestAddendum?: string;
    operation: GetCreateJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    validateOnly: boolean;
    version: GetCreateJobVersionEnum;
}
export declare class GetCreateJobRequest extends SpeakeasyBase {
    queryParams: GetCreateJobQueryParams;
}
export declare class GetCreateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
