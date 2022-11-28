import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAttachLoadBalancerTargetGroupsActionEnum {
    AttachLoadBalancerTargetGroups = "AttachLoadBalancerTargetGroups"
}

export enum GetAttachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetAttachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachLoadBalancerTargetGroupsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupARNs" })
  targetGroupArNs: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachLoadBalancerTargetGroupsVersionEnum;
}


export class GetAttachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
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


export class GetAttachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAttachLoadBalancerTargetGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAttachLoadBalancerTargetGroupsHeaders;
}


export class GetAttachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
