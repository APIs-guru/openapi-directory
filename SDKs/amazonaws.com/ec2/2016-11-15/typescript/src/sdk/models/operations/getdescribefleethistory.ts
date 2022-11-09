import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeFleetHistoryActionEnum {
    DescribeFleetHistory = "DescribeFleetHistory"
}

export enum GetDescribeFleetHistoryEventTypeEnum {
    InstanceChange = "instance-change"
,    FleetChange = "fleet-change"
,    ServiceError = "service-error"
}

export enum GetDescribeFleetHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeFleetHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeFleetHistoryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventType" })
  eventType?: GetDescribeFleetHistoryEventTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FleetId" })
  fleetId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeFleetHistoryVersionEnum;
}


export class GetDescribeFleetHistoryHeaders extends SpeakeasyBase {
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


export class GetDescribeFleetHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeFleetHistoryQueryParams;

  @Metadata()
  headers: GetDescribeFleetHistoryHeaders;
}


export class GetDescribeFleetHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
