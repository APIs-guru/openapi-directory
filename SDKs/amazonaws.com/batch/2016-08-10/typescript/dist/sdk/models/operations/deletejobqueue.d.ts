import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJobQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJobQueueRequestBody extends SpeakeasyBase {
    jobQueue: string;
}
export declare class DeleteJobQueueRequest extends SpeakeasyBase {
    headers: DeleteJobQueueHeaders;
    request: DeleteJobQueueRequestBody;
}
export declare class DeleteJobQueueResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteJobQueueResponse?: Map<string, any>;
    serverException?: any;
    statusCode: number;
}
