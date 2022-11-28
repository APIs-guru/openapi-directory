import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigurationAggregator = "StarlingDoveService.DeleteConfigurationAggregator"
}
export declare class DeleteConfigurationAggregatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigurationAggregatorXAmzTargetEnum;
}
export declare class DeleteConfigurationAggregatorRequest extends SpeakeasyBase {
    headers: DeleteConfigurationAggregatorHeaders;
    request: shared.DeleteConfigurationAggregatorRequest;
}
export declare class DeleteConfigurationAggregatorResponse extends SpeakeasyBase {
    contentType: string;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
}
