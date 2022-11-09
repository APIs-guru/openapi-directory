import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAssessmentRunAgentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListAssessmentRunAgentsXAmzTargetEnum {
    InspectorServiceListAssessmentRunAgents = "InspectorService.ListAssessmentRunAgents"
}


export class ListAssessmentRunAgentsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAssessmentRunAgentsXAmzTargetEnum;
}


export class ListAssessmentRunAgentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAssessmentRunAgentsQueryParams;

  @Metadata()
  headers: ListAssessmentRunAgentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAssessmentRunAgentsRequest;
}


export class ListAssessmentRunAgentsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listAssessmentRunAgentsResponse?: shared.ListAssessmentRunAgentsResponse;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  statusCode: number;
}
