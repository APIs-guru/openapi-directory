import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAssessmentRunsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListAssessmentRunsXAmzTargetEnum {
    InspectorServiceListAssessmentRuns = "InspectorService.ListAssessmentRuns"
}


export class ListAssessmentRunsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListAssessmentRunsXAmzTargetEnum;
}


export class ListAssessmentRunsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAssessmentRunsQueryParams;

  @Metadata()
  headers: ListAssessmentRunsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAssessmentRunsRequest;
}


export class ListAssessmentRunsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listAssessmentRunsResponse?: shared.ListAssessmentRunsResponse;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  statusCode: number;
}
