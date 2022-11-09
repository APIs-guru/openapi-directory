import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListJobsStatusEnum {
    InProgress = "IN_PROGRESS"
,    Canceled = "CANCELED"
,    Completed = "COMPLETED"
,    DeletionInProgress = "DELETION_IN_PROGRESS"
}

export enum ListJobsTargetSelectionEnum {
    Continuous = "CONTINUOUS"
,    Snapshot = "SNAPSHOT"
}


export class ListJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=namespaceId" })
  namespaceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListJobsStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=targetSelection" })
  targetSelection?: ListJobsTargetSelectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thingGroupId" })
  thingGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thingGroupName" })
  thingGroupName?: string;
}


export class ListJobsHeaders extends SpeakeasyBase {
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


export class ListJobsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListJobsQueryParams;

  @Metadata()
  headers: ListJobsHeaders;
}


export class ListJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listJobsResponse?: shared.ListJobsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
