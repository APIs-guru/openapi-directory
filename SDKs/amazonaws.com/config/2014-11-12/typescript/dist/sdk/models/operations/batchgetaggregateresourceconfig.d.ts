import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetAggregateResourceConfig = "StarlingDoveService.BatchGetAggregateResourceConfig"
}
export declare class BatchGetAggregateResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetAggregateResourceConfigXAmzTargetEnum;
}
export declare class BatchGetAggregateResourceConfigRequest extends SpeakeasyBase {
    headers: BatchGetAggregateResourceConfigHeaders;
    request: shared.BatchGetAggregateResourceConfigRequest;
}
export declare class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
    batchGetAggregateResourceConfigResponse?: shared.BatchGetAggregateResourceConfigResponse;
    contentType: string;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
