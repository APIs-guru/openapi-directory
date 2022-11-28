import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class CancelJobQueryParams extends SpeakeasyBase {
    force?: boolean;
}
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
    comment?: string;
    reasonCode?: string;
}
export declare class CancelJobRequest extends SpeakeasyBase {
    pathParams: CancelJobPathParams;
    queryParams: CancelJobQueryParams;
    headers: CancelJobHeaders;
    request: CancelJobRequestBody;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    cancelJobResponse?: shared.CancelJobResponse;
    contentType: string;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
