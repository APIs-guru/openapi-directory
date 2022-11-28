import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPutLifecycleHookActionEnum {
    PutLifecycleHook = "PutLifecycleHook"
}

export enum GetPutLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutLifecycleHookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutLifecycleHookActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DefaultResult" })
  defaultResult?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HeartbeatTimeout" })
  heartbeatTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" })
  lifecycleHookName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LifecycleTransition" })
  lifecycleTransition?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationMetadata" })
  notificationMetadata?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationTargetARN" })
  notificationTargetArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutLifecycleHookVersionEnum;
}


export class GetPutLifecycleHookHeaders extends SpeakeasyBase {
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


export class GetPutLifecycleHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPutLifecycleHookQueryParams;

  @SpeakeasyMetadata()
  headers: GetPutLifecycleHookHeaders;
}


export class GetPutLifecycleHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
