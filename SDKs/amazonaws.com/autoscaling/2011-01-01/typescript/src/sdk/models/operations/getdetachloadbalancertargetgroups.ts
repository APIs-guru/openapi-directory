import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDetachLoadBalancerTargetGroupsActionEnum {
    DetachLoadBalancerTargetGroups = "DetachLoadBalancerTargetGroups"
}

export enum GetDetachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDetachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachLoadBalancerTargetGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupARNs" })
  targetGroupArNs: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachLoadBalancerTargetGroupsVersionEnum;
}


export class GetDetachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
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


export class GetDetachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDetachLoadBalancerTargetGroupsQueryParams;

  @Metadata()
  headers: GetDetachLoadBalancerTargetGroupsHeaders;
}


export class GetDetachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
