import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetStatusActionEnum {
    GetStatus = "GetStatus"
}
export declare enum GetGetStatusOperationEnum {
    GetStatus = "GetStatus"
}
export declare enum GetGetStatusVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GetGetStatusQueryParams extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GetGetStatusActionEnum;
    jobId: string;
    operation: GetGetStatusOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetGetStatusVersionEnum;
}
export declare class GetGetStatusRequest extends SpeakeasyBase {
    queryParams: GetGetStatusQueryParams;
}
export declare class GetGetStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
