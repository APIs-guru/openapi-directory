import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListJobsActionEnum {
    ListJobs = "ListJobs"
}
export declare enum PostListJobsOperationEnum {
    ListJobs = "ListJobs"
}
export declare enum PostListJobsVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class PostListJobsQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostListJobsActionEnum;
    marker?: string;
    maxJobs?: string;
    operation: PostListJobsOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostListJobsVersionEnum;
}
export declare class PostListJobsRequest extends SpeakeasyBase {
    queryParams: PostListJobsQueryParams;
    request?: Uint8Array;
}
export declare class PostListJobsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
