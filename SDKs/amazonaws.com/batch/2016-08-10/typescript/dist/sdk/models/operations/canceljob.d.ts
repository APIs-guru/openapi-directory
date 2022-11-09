import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CancelJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelJobRequestBody extends SpeakeasyBase {
    jobId: string;
    reason: string;
}
export declare class CancelJobRequest extends SpeakeasyBase {
    headers: CancelJobHeaders;
    request: CancelJobRequestBody;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    cancelJobResponse?: Map<string, any>;
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
}
