import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetNamedQueryXAmzTargetEnum {
    AmazonAthenaBatchGetNamedQuery = "AmazonAthena.BatchGetNamedQuery"
}
export declare class BatchGetNamedQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetNamedQueryXAmzTargetEnum;
}
export declare class BatchGetNamedQueryRequest extends SpeakeasyBase {
    headers: BatchGetNamedQueryHeaders;
    request: shared.BatchGetNamedQueryInput;
}
export declare class BatchGetNamedQueryResponse extends SpeakeasyBase {
    batchGetNamedQueryOutput?: shared.BatchGetNamedQueryOutput;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
