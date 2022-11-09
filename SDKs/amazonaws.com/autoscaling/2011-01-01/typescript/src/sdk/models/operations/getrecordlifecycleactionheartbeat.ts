import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRecordLifecycleActionHeartbeatActionEnum {
    RecordLifecycleActionHeartbeat = "RecordLifecycleActionHeartbeat"
}

export enum GetRecordLifecycleActionHeartbeatVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetRecordLifecycleActionHeartbeatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRecordLifecycleActionHeartbeatActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleActionToken" })
  lifecycleActionToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" })
  lifecycleHookName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRecordLifecycleActionHeartbeatVersionEnum;
}


export class GetRecordLifecycleActionHeartbeatHeaders extends SpeakeasyBase {
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


export class GetRecordLifecycleActionHeartbeatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRecordLifecycleActionHeartbeatQueryParams;

  @Metadata()
  headers: GetRecordLifecycleActionHeartbeatHeaders;
}


export class GetRecordLifecycleActionHeartbeatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
