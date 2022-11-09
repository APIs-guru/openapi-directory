import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCodeReviewHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateCodeReviewRequestBodyType
/** 
 * <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
**/
export class CreateCodeReviewRequestBodyType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalysisTypes" })
  analysisTypes?: shared.AnalysisTypeEnum[];

  @Metadata({ data: "json, name=RepositoryAnalysis" })
  repositoryAnalysis?: shared.RepositoryAnalysis;
}


export class CreateCodeReviewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RepositoryAssociationArn" })
  repositoryAssociationArn: string;

  @Metadata({ data: "json, name=Type" })
  type: CreateCodeReviewRequestBodyType;
}


export class CreateCodeReviewRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCodeReviewHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCodeReviewRequestBody;
}


export class CreateCodeReviewResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCodeReviewResponse?: shared.CreateCodeReviewResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
