import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostTerminateInstanceInAutoScalingGroupActionEnum {
    TerminateInstanceInAutoScalingGroup = "TerminateInstanceInAutoScalingGroup"
}

export enum PostTerminateInstanceInAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostTerminateInstanceInAutoScalingGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostTerminateInstanceInAutoScalingGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostTerminateInstanceInAutoScalingGroupVersionEnum;
}


export class PostTerminateInstanceInAutoScalingGroupHeaders extends SpeakeasyBase {
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


export class PostTerminateInstanceInAutoScalingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostTerminateInstanceInAutoScalingGroupQueryParams;

  @SpeakeasyMetadata()
  headers: PostTerminateInstanceInAutoScalingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostTerminateInstanceInAutoScalingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
