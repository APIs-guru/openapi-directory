import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchPutMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutMessageRequestBody extends SpeakeasyBase {
    channelName: string;
    messages: shared.Message[];
}
export declare class BatchPutMessageRequest extends SpeakeasyBase {
    headers: BatchPutMessageHeaders;
    request: BatchPutMessageRequestBody;
}
export declare class BatchPutMessageResponse extends SpeakeasyBase {
    batchPutMessageResponse?: shared.BatchPutMessageResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
