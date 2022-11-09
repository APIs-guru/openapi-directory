import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDominantLanguageDetectionJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListDominantLanguageDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListDominantLanguageDetectionJobs = "Comprehend_20171127.ListDominantLanguageDetectionJobs"
}


export class ListDominantLanguageDetectionJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDominantLanguageDetectionJobsXAmzTargetEnum;
}


export class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDominantLanguageDetectionJobsQueryParams;

  @Metadata()
  headers: ListDominantLanguageDetectionJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDominantLanguageDetectionJobsRequest;
}


export class ListDominantLanguageDetectionJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidFilterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listDominantLanguageDetectionJobsResponse?: shared.ListDominantLanguageDetectionJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
