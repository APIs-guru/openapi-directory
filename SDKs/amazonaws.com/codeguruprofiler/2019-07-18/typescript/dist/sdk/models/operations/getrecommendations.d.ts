import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecommendationsPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class GetRecommendationsQueryParams extends SpeakeasyBase {
    endTime: Date;
    locale?: string;
    startTime: Date;
}
export declare class GetRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecommendationsRequest extends SpeakeasyBase {
    pathParams: GetRecommendationsPathParams;
    queryParams: GetRecommendationsQueryParams;
    headers: GetRecommendationsHeaders;
}
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    getRecommendationsResponse?: shared.GetRecommendationsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
