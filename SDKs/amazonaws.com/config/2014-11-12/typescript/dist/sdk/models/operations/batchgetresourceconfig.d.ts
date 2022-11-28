import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetResourceConfig = "StarlingDoveService.BatchGetResourceConfig"
}
export declare class BatchGetResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetResourceConfigXAmzTargetEnum;
}
export declare class BatchGetResourceConfigRequest extends SpeakeasyBase {
    headers: BatchGetResourceConfigHeaders;
    request: shared.BatchGetResourceConfigRequest;
}
export declare class BatchGetResourceConfigResponse extends SpeakeasyBase {
    batchGetResourceConfigResponse?: shared.BatchGetResourceConfigResponse;
    contentType: string;
    noAvailableConfigurationRecorderException?: any;
    statusCode: number;
    validationException?: any;
}
