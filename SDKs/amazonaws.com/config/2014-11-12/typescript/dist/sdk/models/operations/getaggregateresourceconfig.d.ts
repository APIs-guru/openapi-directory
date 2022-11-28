import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceGetAggregateResourceConfig = "StarlingDoveService.GetAggregateResourceConfig"
}
export declare class GetAggregateResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAggregateResourceConfigXAmzTargetEnum;
}
export declare class GetAggregateResourceConfigRequest extends SpeakeasyBase {
    headers: GetAggregateResourceConfigHeaders;
    request: shared.GetAggregateResourceConfigRequest;
}
export declare class GetAggregateResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    getAggregateResourceConfigResponse?: shared.GetAggregateResourceConfigResponse;
    noSuchConfigurationAggregatorException?: any;
    oversizedConfigurationItemException?: any;
    resourceNotDiscoveredException?: any;
    statusCode: number;
    validationException?: any;
}
