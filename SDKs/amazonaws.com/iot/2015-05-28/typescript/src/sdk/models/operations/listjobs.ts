import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListJobsStatusEnum {
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Completed = "COMPLETED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}

export enum ListJobsTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}


export class ListJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespaceId" })
  namespaceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: ListJobsStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetSelection" })
  targetSelection?: ListJobsTargetSelectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thingGroupId" })
  thingGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thingGroupName" })
  thingGroupName?: string;
}


export class ListJobsHeaders extends SpeakeasyBase {
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


export class ListJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListJobsQueryParams;

  @SpeakeasyMetadata()
  headers: ListJobsHeaders;
}


export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listJobsResponse?: shared.ListJobsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
