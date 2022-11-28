import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SelectAggregateResourceConfigQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum SelectAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceSelectAggregateResourceConfig = "StarlingDoveService.SelectAggregateResourceConfig"
}
export declare class SelectAggregateResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SelectAggregateResourceConfigXAmzTargetEnum;
}
export declare class SelectAggregateResourceConfigRequest extends SpeakeasyBase {
    queryParams: SelectAggregateResourceConfigQueryParams;
    headers: SelectAggregateResourceConfigHeaders;
    request: shared.SelectAggregateResourceConfigRequest;
}
export declare class SelectAggregateResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidExpressionException?: any;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    selectAggregateResourceConfigResponse?: shared.SelectAggregateResourceConfigResponse;
    statusCode: number;
}
