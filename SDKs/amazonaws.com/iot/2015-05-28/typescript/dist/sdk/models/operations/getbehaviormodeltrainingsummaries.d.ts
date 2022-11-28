import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBehaviorModelTrainingSummariesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    securityProfileName?: string;
}
export declare class GetBehaviorModelTrainingSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBehaviorModelTrainingSummariesRequest extends SpeakeasyBase {
    queryParams: GetBehaviorModelTrainingSummariesQueryParams;
    headers: GetBehaviorModelTrainingSummariesHeaders;
}
export declare class GetBehaviorModelTrainingSummariesResponse extends SpeakeasyBase {
    contentType: string;
    getBehaviorModelTrainingSummariesResponse?: shared.GetBehaviorModelTrainingSummariesResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
