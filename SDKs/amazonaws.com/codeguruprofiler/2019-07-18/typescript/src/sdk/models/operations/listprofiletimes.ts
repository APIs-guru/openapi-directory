import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProfileTimesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}

export enum ListProfileTimesOrderByEnum {
    TimestampDescending = "TimestampDescending"
,    TimestampAscending = "TimestampAscending"
}

export enum ListProfileTimesPeriodEnum {
    Pt5M = "PT5M"
,    Pt1H = "PT1H"
,    P1D = "P1D"
}


export class ListProfileTimesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: ListProfileTimesOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=period" })
  period: ListProfileTimesPeriodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime: Date;
}


export class ListProfileTimesHeaders extends SpeakeasyBase {
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


export class ListProfileTimesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListProfileTimesPathParams;

  @Metadata()
  queryParams: ListProfileTimesQueryParams;

  @Metadata()
  headers: ListProfileTimesHeaders;
}


export class ListProfileTimesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listProfileTimesResponse?: shared.ListProfileTimesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
