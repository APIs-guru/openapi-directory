import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTerminateInstanceInAutoScalingGroupActionEnum {
    TerminateInstanceInAutoScalingGroup = "TerminateInstanceInAutoScalingGroup"
}

export enum PostTerminateInstanceInAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostTerminateInstanceInAutoScalingGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostTerminateInstanceInAutoScalingGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostTerminateInstanceInAutoScalingGroupVersionEnum;
}


export class PostTerminateInstanceInAutoScalingGroupHeaders extends SpeakeasyBase {
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


export class PostTerminateInstanceInAutoScalingGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostTerminateInstanceInAutoScalingGroupQueryParams;

  @Metadata()
  headers: PostTerminateInstanceInAutoScalingGroupHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostTerminateInstanceInAutoScalingGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
