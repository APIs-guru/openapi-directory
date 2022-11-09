import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}

export enum GetDescribeEventsSeverityEnum {
    Trace = "TRACE"
,    Debug = "DEBUG"
,    Info = "INFO"
,    Warn = "WARN"
,    Error = "ERROR"
,    Fatal = "FATAL"
}

export enum GetDescribeEventsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEventsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PlatformArn" })
  platformArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RequestId" })
  requestId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Severity" })
  severity?: GetDescribeEventsSeverityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEventsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabel" })
  versionLabel?: string;
}


export class GetDescribeEventsHeaders extends SpeakeasyBase {
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


export class GetDescribeEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEventsQueryParams;

  @Metadata()
  headers: GetDescribeEventsHeaders;
}


export class GetDescribeEventsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
