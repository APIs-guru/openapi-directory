import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTopicsDetectionJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTopicsDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListTopicsDetectionJobs = "Comprehend_20171127.ListTopicsDetectionJobs"
}


export class ListTopicsDetectionJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTopicsDetectionJobsXAmzTargetEnum;
}


export class ListTopicsDetectionJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTopicsDetectionJobsQueryParams;

  @Metadata()
  headers: ListTopicsDetectionJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTopicsDetectionJobsRequest;
}


export class ListTopicsDetectionJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidFilterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listTopicsDetectionJobsResponse?: shared.ListTopicsDetectionJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
