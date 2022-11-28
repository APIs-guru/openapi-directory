import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListJobsActionEnum {
    ListJobs = "ListJobs"
}
export declare enum GetListJobsOperationEnum {
    ListJobs = "ListJobs"
}
export declare enum GetListJobsVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GetListJobsQueryParams extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GetListJobsActionEnum;
    marker?: string;
    maxJobs?: number;
    operation: GetListJobsOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetListJobsVersionEnum;
}
export declare class GetListJobsRequest extends SpeakeasyBase {
    queryParams: GetListJobsQueryParams;
}
export declare class GetListJobsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
