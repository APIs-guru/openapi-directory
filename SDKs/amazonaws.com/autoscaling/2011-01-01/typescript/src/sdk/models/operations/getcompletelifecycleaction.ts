import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCompleteLifecycleActionActionEnum {
    CompleteLifecycleAction = "CompleteLifecycleAction"
}

export enum GetCompleteLifecycleActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetCompleteLifecycleActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCompleteLifecycleActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleActionResult" })
  lifecycleActionResult: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleActionToken" })
  lifecycleActionToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" })
  lifecycleHookName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCompleteLifecycleActionVersionEnum;
}


export class GetCompleteLifecycleActionHeaders extends SpeakeasyBase {
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


export class GetCompleteLifecycleActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCompleteLifecycleActionQueryParams;

  @Metadata()
  headers: GetCompleteLifecycleActionHeaders;
}


export class GetCompleteLifecycleActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
