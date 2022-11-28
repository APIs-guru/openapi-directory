import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRecordBatchXAmzTargetEnum {
    Firehose20150804PutRecordBatch = "Firehose_20150804.PutRecordBatch"
}
export declare class PutRecordBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordBatchXAmzTargetEnum;
}
export declare class PutRecordBatchRequest extends SpeakeasyBase {
    headers: PutRecordBatchHeaders;
    request: shared.PutRecordBatchInput;
}
export declare class PutRecordBatchResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    invalidKmsResourceException?: any;
    putRecordBatchOutput?: shared.PutRecordBatchOutput;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
