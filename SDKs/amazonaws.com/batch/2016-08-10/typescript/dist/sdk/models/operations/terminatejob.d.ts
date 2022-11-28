import { SpeakeasyBase } from "../../../internal/utils";
export declare class TerminateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TerminateJobRequestBody extends SpeakeasyBase {
    jobId: string;
    reason: string;
}
export declare class TerminateJobRequest extends SpeakeasyBase {
    headers: TerminateJobHeaders;
    request: TerminateJobRequestBody;
}
export declare class TerminateJobResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
    terminateJobResponse?: Map<string, any>;
}
