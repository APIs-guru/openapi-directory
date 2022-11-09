import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListCodeReviewsTypeEnum {
    PullRequest = "PullRequest"
,    RepositoryAnalysis = "RepositoryAnalysis"
}


export class ListCodeReviewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProviderTypes" })
  providerTypes?: shared.ProviderTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RepositoryNames" })
  repositoryNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=States" })
  states?: shared.JobStateEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type: ListCodeReviewsTypeEnum;
}


export class ListCodeReviewsHeaders extends SpeakeasyBase {
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


export class ListCodeReviewsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCodeReviewsQueryParams;

  @Metadata()
  headers: ListCodeReviewsHeaders;
}


export class ListCodeReviewsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listCodeReviewsResponse?: shared.ListCodeReviewsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
