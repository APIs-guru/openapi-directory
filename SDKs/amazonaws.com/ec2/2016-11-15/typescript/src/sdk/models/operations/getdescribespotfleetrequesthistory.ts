import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeSpotFleetRequestHistoryActionEnum {
    DescribeSpotFleetRequestHistory = "DescribeSpotFleetRequestHistory"
}

export enum GetDescribeSpotFleetRequestHistoryEventTypeEnum {
    InstanceChange = "instanceChange"
,    FleetRequestChange = "fleetRequestChange"
,    Error = "error"
,    Information = "information"
}

export enum GetDescribeSpotFleetRequestHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeSpotFleetRequestHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeSpotFleetRequestHistoryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventType" })
  eventType?: GetDescribeSpotFleetRequestHistoryEventTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" })
  spotFleetRequestId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeSpotFleetRequestHistoryVersionEnum;
}


export class GetDescribeSpotFleetRequestHistoryHeaders extends SpeakeasyBase {
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


export class GetDescribeSpotFleetRequestHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeSpotFleetRequestHistoryQueryParams;

  @Metadata()
  headers: GetDescribeSpotFleetRequestHistoryHeaders;
}


export class GetDescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
