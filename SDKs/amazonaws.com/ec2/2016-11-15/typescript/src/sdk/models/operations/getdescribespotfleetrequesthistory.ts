import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeSpotFleetRequestHistoryActionEnum {
    DescribeSpotFleetRequestHistory = "DescribeSpotFleetRequestHistory"
}

export enum GetDescribeSpotFleetRequestHistoryEventTypeEnum {
    InstanceChange = "instanceChange",
    FleetRequestChange = "fleetRequestChange",
    Error = "error",
    Information = "information"
}

export enum GetDescribeSpotFleetRequestHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeSpotFleetRequestHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeSpotFleetRequestHistoryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventType" })
  eventType?: GetDescribeSpotFleetRequestHistoryEventTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" })
  spotFleetRequestId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeSpotFleetRequestHistoryVersionEnum;
}


export class GetDescribeSpotFleetRequestHistoryHeaders extends SpeakeasyBase {
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


export class GetDescribeSpotFleetRequestHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeSpotFleetRequestHistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeSpotFleetRequestHistoryHeaders;
}


export class GetDescribeSpotFleetRequestHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
