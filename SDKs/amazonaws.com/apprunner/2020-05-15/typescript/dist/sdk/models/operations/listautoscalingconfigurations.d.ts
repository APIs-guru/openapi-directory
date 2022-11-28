import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAutoScalingConfigurationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAutoScalingConfigurationsXAmzTargetEnum {
    AppRunnerListAutoScalingConfigurations = "AppRunner.ListAutoScalingConfigurations"
}
export declare class ListAutoScalingConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAutoScalingConfigurationsXAmzTargetEnum;
}
export declare class ListAutoScalingConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListAutoScalingConfigurationsQueryParams;
    headers: ListAutoScalingConfigurationsHeaders;
    request: shared.ListAutoScalingConfigurationsRequest;
}
export declare class ListAutoScalingConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    listAutoScalingConfigurationsResponse?: shared.ListAutoScalingConfigurationsResponse;
    statusCode: number;
}
