import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourceConfigHistoryQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetResourceConfigHistoryXAmzTargetEnum {
    StarlingDoveServiceGetResourceConfigHistory = "StarlingDoveService.GetResourceConfigHistory"
}
export declare class GetResourceConfigHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceConfigHistoryXAmzTargetEnum;
}
export declare class GetResourceConfigHistoryRequest extends SpeakeasyBase {
    queryParams: GetResourceConfigHistoryQueryParams;
    headers: GetResourceConfigHistoryHeaders;
    request: shared.GetResourceConfigHistoryRequest;
}
export declare class GetResourceConfigHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getResourceConfigHistoryResponse?: shared.GetResourceConfigHistoryResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidTimeRangeException?: any;
    noAvailableConfigurationRecorderException?: any;
    resourceNotDiscoveredException?: any;
    statusCode: number;
    validationException?: any;
}
