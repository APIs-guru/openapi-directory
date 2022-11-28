import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBatchDeleteScheduledActionActionEnum {
    BatchDeleteScheduledAction = "BatchDeleteScheduledAction"
}

export enum GetBatchDeleteScheduledActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetBatchDeleteScheduledActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetBatchDeleteScheduledActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ScheduledActionNames" })
  scheduledActionNames: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetBatchDeleteScheduledActionVersionEnum;
}


export class GetBatchDeleteScheduledActionHeaders extends SpeakeasyBase {
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


export class GetBatchDeleteScheduledActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBatchDeleteScheduledActionQueryParams;

  @SpeakeasyMetadata()
  headers: GetBatchDeleteScheduledActionHeaders;
}


export class GetBatchDeleteScheduledActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
