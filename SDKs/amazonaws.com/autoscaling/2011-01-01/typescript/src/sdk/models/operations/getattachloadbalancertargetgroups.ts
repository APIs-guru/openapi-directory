import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAttachLoadBalancerTargetGroupsActionEnum {
    AttachLoadBalancerTargetGroups = "AttachLoadBalancerTargetGroups"
}

export enum GetAttachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetAttachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachLoadBalancerTargetGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupARNs" })
  targetGroupArNs: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachLoadBalancerTargetGroupsVersionEnum;
}


export class GetAttachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
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


export class GetAttachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttachLoadBalancerTargetGroupsQueryParams;

  @Metadata()
  headers: GetAttachLoadBalancerTargetGroupsHeaders;
}


export class GetAttachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
