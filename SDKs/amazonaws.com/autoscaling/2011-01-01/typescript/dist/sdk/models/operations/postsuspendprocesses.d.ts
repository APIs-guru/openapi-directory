import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSuspendProcessesActionEnum {
    SuspendProcesses = "SuspendProcesses"
}
export declare enum PostSuspendProcessesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostSuspendProcessesQueryParams extends SpeakeasyBase {
    action: PostSuspendProcessesActionEnum;
    version: PostSuspendProcessesVersionEnum;
}
export declare class PostSuspendProcessesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSuspendProcessesRequest extends SpeakeasyBase {
    queryParams: PostSuspendProcessesQueryParams;
    headers: PostSuspendProcessesHeaders;
    request?: Uint8Array;
}
export declare class PostSuspendProcessesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
