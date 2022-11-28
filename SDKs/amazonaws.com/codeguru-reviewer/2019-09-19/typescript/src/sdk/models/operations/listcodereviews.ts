import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListCodeReviewsTypeEnum {
    PullRequest = "PullRequest",
    RepositoryAnalysis = "RepositoryAnalysis"
}


export class ListCodeReviewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProviderTypes" })
  providerTypes?: shared.ProviderTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RepositoryNames" })
  repositoryNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=States" })
  states?: shared.JobStateEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type: ListCodeReviewsTypeEnum;
}


export class ListCodeReviewsHeaders extends SpeakeasyBase {
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


export class ListCodeReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCodeReviewsQueryParams;

  @SpeakeasyMetadata()
  headers: ListCodeReviewsHeaders;
}


export class ListCodeReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listCodeReviewsResponse?: shared.ListCodeReviewsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
