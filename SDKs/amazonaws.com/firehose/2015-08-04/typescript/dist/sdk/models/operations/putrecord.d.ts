import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRecordXAmzTargetEnum {
    Firehose20150804PutRecord = "Firehose_20150804.PutRecord"
}
export declare class PutRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordXAmzTargetEnum;
}
export declare class PutRecordRequest extends SpeakeasyBase {
    headers: PutRecordHeaders;
    request: shared.PutRecordInput;
}
export declare class PutRecordResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgumentException?: any;
    invalidKmsResourceException?: any;
    putRecordOutput?: shared.PutRecordOutput;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
