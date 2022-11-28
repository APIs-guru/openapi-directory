import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRecommendationsPathParams extends SpeakeasyBase {
    codeReviewArn: string;
}
export declare class ListRecommendationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRecommendationsRequest extends SpeakeasyBase {
    pathParams: ListRecommendationsPathParams;
    queryParams: ListRecommendationsQueryParams;
    headers: ListRecommendationsHeaders;
}
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRecommendationsResponse?: shared.ListRecommendationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
