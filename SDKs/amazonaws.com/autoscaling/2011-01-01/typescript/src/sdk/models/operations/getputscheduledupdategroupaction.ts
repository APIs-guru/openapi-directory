import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutScheduledUpdateGroupActionActionEnum {
    PutScheduledUpdateGroupAction = "PutScheduledUpdateGroupAction"
}

export enum GetPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutScheduledUpdateGroupActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DesiredCapacity" })
  desiredCapacity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinSize" })
  minSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Recurrence" })
  recurrence?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionName" })
  scheduledActionName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TimeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutScheduledUpdateGroupActionVersionEnum;
}


export class GetPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
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


export class GetPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutScheduledUpdateGroupActionQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutScheduledUpdateGroupActionHeaders;
}


export class GetPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
