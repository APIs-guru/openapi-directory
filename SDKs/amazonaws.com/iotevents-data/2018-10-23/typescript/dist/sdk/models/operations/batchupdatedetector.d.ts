import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchUpdateDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateDetectorRequestBody extends SpeakeasyBase {
    detectors: shared.UpdateDetectorRequest[];
}
export declare class BatchUpdateDetectorRequest extends SpeakeasyBase {
    headers: BatchUpdateDetectorHeaders;
    request: BatchUpdateDetectorRequestBody;
}
export declare class BatchUpdateDetectorResponse extends SpeakeasyBase {
    batchUpdateDetectorResponse?: shared.BatchUpdateDetectorResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
