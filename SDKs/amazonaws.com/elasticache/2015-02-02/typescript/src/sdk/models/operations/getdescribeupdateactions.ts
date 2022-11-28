import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDescribeUpdateActionsActionEnum {
    DescribeUpdateActions = "DescribeUpdateActions"
}


// GetDescribeUpdateActionsServiceUpdateTimeRange
/** 
 * Filters update actions from the service updates that are in available status during the time range.
**/
export class GetDescribeUpdateActionsServiceUpdateTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, name=StartTime" })
  startTime?: Date;
}

export enum GetDescribeUpdateActionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeUpdateActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeUpdateActionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" })
  cacheClusterIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" })
  replicationGroupIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateStatus" })
  serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateTimeRange" })
  serviceUpdateTimeRange?: GetDescribeUpdateActionsServiceUpdateTimeRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShowNodeLevelUpdateStatus" })
  showNodeLevelUpdateStatus?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UpdateActionStatus" })
  updateActionStatus?: shared.UpdateActionStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeUpdateActionsVersionEnum;
}


export class GetDescribeUpdateActionsHeaders extends SpeakeasyBase {
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


export class GetDescribeUpdateActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeUpdateActionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeUpdateActionsHeaders;
}


export class GetDescribeUpdateActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
