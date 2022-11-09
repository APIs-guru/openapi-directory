import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutScheduledUpdateGroupActionActionEnum {
    PutScheduledUpdateGroupAction = "PutScheduledUpdateGroupAction"
}

export enum GetPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutScheduledUpdateGroupActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DesiredCapacity" })
  desiredCapacity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxSize" })
  maxSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MinSize" })
  minSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Recurrence" })
  recurrence?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionName" })
  scheduledActionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Time" })
  time?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TimeZone" })
  timeZone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutScheduledUpdateGroupActionVersionEnum;
}


export class GetPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
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


export class GetPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutScheduledUpdateGroupActionQueryParams;

  @Metadata()
  headers: GetPutScheduledUpdateGroupActionHeaders;
}


export class GetPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
