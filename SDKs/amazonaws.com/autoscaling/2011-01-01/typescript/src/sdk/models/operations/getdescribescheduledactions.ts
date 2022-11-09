import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeScheduledActionsActionEnum {
    DescribeScheduledActions = "DescribeScheduledActions"
}

export enum GetDescribeScheduledActionsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeScheduledActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeScheduledActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionNames" })
  scheduledActionNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeScheduledActionsVersionEnum;
}


export class GetDescribeScheduledActionsHeaders extends SpeakeasyBase {
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


export class GetDescribeScheduledActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeScheduledActionsQueryParams;

  @Metadata()
  headers: GetDescribeScheduledActionsHeaders;
}


export class GetDescribeScheduledActionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
