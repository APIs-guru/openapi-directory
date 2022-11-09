import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostResumeProcessesActionEnum {
    ResumeProcesses = "ResumeProcesses"
}
export declare enum PostResumeProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostResumeProcessesQueryParams extends SpeakeasyBase {
    action: PostResumeProcessesActionEnum;
    version: PostResumeProcessesVersionEnum;
}
export declare class PostResumeProcessesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResumeProcessesRequest extends SpeakeasyBase {
    queryParams: PostResumeProcessesQueryParams;
    headers: PostResumeProcessesHeaders;
    request?: Uint8Array;
}
export declare class PostResumeProcessesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
