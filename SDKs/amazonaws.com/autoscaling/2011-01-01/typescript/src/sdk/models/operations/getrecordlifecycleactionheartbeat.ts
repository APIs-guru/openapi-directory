import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRecordLifecycleActionHeartbeatActionEnum {
    RecordLifecycleActionHeartbeat = "RecordLifecycleActionHeartbeat"
}

export enum GetRecordLifecycleActionHeartbeatVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetRecordLifecycleActionHeartbeatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRecordLifecycleActionHeartbeatActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleActionToken" })
  lifecycleActionToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" })
  lifecycleHookName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRecordLifecycleActionHeartbeatVersionEnum;
}


export class GetRecordLifecycleActionHeartbeatHeaders extends SpeakeasyBase {
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


export class GetRecordLifecycleActionHeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRecordLifecycleActionHeartbeatQueryParams;

  @SpeakeasyMetadata()
  headers: GetRecordLifecycleActionHeartbeatHeaders;
}


export class GetRecordLifecycleActionHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
