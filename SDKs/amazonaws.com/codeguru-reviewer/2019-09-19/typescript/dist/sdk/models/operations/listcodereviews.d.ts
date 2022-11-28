import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListCodeReviewsTypeEnum {
    PullRequest = "PullRequest",
    RepositoryAnalysis = "RepositoryAnalysis"
}
export declare class ListCodeReviewsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    providerTypes?: shared.ProviderTypeEnum[];
    repositoryNames?: string[];
    states?: shared.JobStateEnum[];
    type: ListCodeReviewsTypeEnum;
}
export declare class ListCodeReviewsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCodeReviewsRequest extends SpeakeasyBase {
    queryParams: ListCodeReviewsQueryParams;
    headers: ListCodeReviewsHeaders;
}
export declare class ListCodeReviewsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listCodeReviewsResponse?: shared.ListCodeReviewsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
