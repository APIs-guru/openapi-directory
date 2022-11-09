import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetPutLifecycleHookActionEnum {
    PutLifecycleHook = "PutLifecycleHook"
}

export enum GetPutLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetPutLifecycleHookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPutLifecycleHookActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DefaultResult" })
  defaultResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HeartbeatTimeout" })
  heartbeatTimeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" })
  lifecycleHookName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleTransition" })
  lifecycleTransition?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NotificationMetadata" })
  notificationMetadata?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NotificationTargetARN" })
  notificationTargetArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPutLifecycleHookVersionEnum;
}


export class GetPutLifecycleHookHeaders extends SpeakeasyBase {
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


export class GetPutLifecycleHookRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPutLifecycleHookQueryParams;

  @Metadata()
  headers: GetPutLifecycleHookHeaders;
}


export class GetPutLifecycleHookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
