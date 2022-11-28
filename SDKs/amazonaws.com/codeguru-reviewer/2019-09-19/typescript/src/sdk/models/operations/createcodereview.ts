import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCodeReviewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateCodeReviewRequestBodyType
/** 
 * <p> The type of a code review. There are two code review types: </p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. </p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. </p> </li> </ul>
**/
export class CreateCodeReviewRequestBodyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalysisTypes" })
  analysisTypes?: shared.AnalysisTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=RepositoryAnalysis" })
  repositoryAnalysis?: shared.RepositoryAnalysis;
}


export class CreateCodeReviewRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryAssociationArn" })
  repositoryAssociationArn: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: CreateCodeReviewRequestBodyType;
}


export class CreateCodeReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCodeReviewHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCodeReviewRequestBody;
}


export class CreateCodeReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCodeReviewResponse?: shared.CreateCodeReviewResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
