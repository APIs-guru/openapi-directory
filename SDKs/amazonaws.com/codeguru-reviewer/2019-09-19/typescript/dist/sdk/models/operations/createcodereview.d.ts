import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateCodeReviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
**/
export declare class CreateCodeReviewRequestBodyType extends SpeakeasyBase {
    analysisTypes?: shared.AnalysisTypeEnum[];
    repositoryAnalysis?: shared.RepositoryAnalysis;
}
export declare class CreateCodeReviewRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    name: string;
    repositoryAssociationArn: string;
    type: CreateCodeReviewRequestBodyType;
}
export declare class CreateCodeReviewRequest extends SpeakeasyBase {
    headers: CreateCodeReviewHeaders;
    request: CreateCodeReviewRequestBody;
}
export declare class CreateCodeReviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createCodeReviewResponse?: shared.CreateCodeReviewResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
