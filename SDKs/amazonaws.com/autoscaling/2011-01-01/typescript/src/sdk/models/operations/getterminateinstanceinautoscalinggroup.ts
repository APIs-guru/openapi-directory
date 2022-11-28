import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTerminateInstanceInAutoScalingGroupActionEnum {
    TerminateInstanceInAutoScalingGroup = "TerminateInstanceInAutoScalingGroup"
}

export enum GetTerminateInstanceInAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetTerminateInstanceInAutoScalingGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTerminateInstanceInAutoScalingGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShouldDecrementDesiredCapacity" })
  shouldDecrementDesiredCapacity: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTerminateInstanceInAutoScalingGroupVersionEnum;
}


export class GetTerminateInstanceInAutoScalingGroupHeaders extends SpeakeasyBase {
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


export class GetTerminateInstanceInAutoScalingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTerminateInstanceInAutoScalingGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetTerminateInstanceInAutoScalingGroupHeaders;
}


export class GetTerminateInstanceInAutoScalingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
