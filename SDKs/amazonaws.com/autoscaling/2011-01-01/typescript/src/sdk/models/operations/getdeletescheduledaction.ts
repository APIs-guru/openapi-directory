import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteScheduledActionActionEnum {
    DeleteScheduledAction = "DeleteScheduledAction"
}

export enum GetDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDeleteScheduledActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteScheduledActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionName" })
  scheduledActionName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteScheduledActionVersionEnum;
}


export class GetDeleteScheduledActionHeaders extends SpeakeasyBase {
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


export class GetDeleteScheduledActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteScheduledActionQueryParams;

  @Metadata()
  headers: GetDeleteScheduledActionHeaders;
}


export class GetDeleteScheduledActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
