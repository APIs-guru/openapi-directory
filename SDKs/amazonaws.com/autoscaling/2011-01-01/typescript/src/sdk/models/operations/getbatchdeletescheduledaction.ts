import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetBatchDeleteScheduledActionActionEnum {
    BatchDeleteScheduledAction = "BatchDeleteScheduledAction"
}

export enum GetBatchDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetBatchDeleteScheduledActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchDeleteScheduledActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionNames" })
  scheduledActionNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchDeleteScheduledActionVersionEnum;
}


export class GetBatchDeleteScheduledActionHeaders extends SpeakeasyBase {
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


export class GetBatchDeleteScheduledActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBatchDeleteScheduledActionQueryParams;

  @Metadata()
  headers: GetBatchDeleteScheduledActionHeaders;
}


export class GetBatchDeleteScheduledActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
