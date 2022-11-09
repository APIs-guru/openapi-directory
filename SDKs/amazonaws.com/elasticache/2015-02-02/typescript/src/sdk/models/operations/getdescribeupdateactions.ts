import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDescribeUpdateActionsActionEnum {
    DescribeUpdateActions = "DescribeUpdateActions"
}


// GetDescribeUpdateActionsServiceUpdateTimeRange
/** 
 * Filters update actions from the service updates that are in available status during the time range.
**/
export class GetDescribeUpdateActionsServiceUpdateTimeRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, name=StartTime" })
  startTime?: Date;
}

export enum GetDescribeUpdateActionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeUpdateActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeUpdateActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterIds" })
  cacheClusterIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupIds" })
  replicationGroupIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateStatus" })
  serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceUpdateTimeRange" })
  serviceUpdateTimeRange?: GetDescribeUpdateActionsServiceUpdateTimeRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ShowNodeLevelUpdateStatus" })
  showNodeLevelUpdateStatus?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateActionStatus" })
  updateActionStatus?: shared.UpdateActionStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeUpdateActionsVersionEnum;
}


export class GetDescribeUpdateActionsHeaders extends SpeakeasyBase {
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


export class GetDescribeUpdateActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeUpdateActionsQueryParams;

  @Metadata()
  headers: GetDescribeUpdateActionsHeaders;
}


export class GetDescribeUpdateActionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
