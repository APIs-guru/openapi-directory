import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListKeyPhrasesDetectionJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListKeyPhrasesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListKeyPhrasesDetectionJobs = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"
}


export class ListKeyPhrasesDetectionJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListKeyPhrasesDetectionJobsXAmzTargetEnum;
}


export class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListKeyPhrasesDetectionJobsQueryParams;

  @Metadata()
  headers: ListKeyPhrasesDetectionJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListKeyPhrasesDetectionJobsRequest;
}


export class ListKeyPhrasesDetectionJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidFilterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listKeyPhrasesDetectionJobsResponse?: shared.ListKeyPhrasesDetectionJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
