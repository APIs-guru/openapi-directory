import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDetachLoadBalancersActionEnum {
    DetachLoadBalancers = "DetachLoadBalancers"
}

export enum GetDetachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDetachLoadBalancersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachLoadBalancersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerNames" })
  loadBalancerNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachLoadBalancersVersionEnum;
}


export class GetDetachLoadBalancersHeaders extends SpeakeasyBase {
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


export class GetDetachLoadBalancersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDetachLoadBalancersQueryParams;

  @Metadata()
  headers: GetDetachLoadBalancersHeaders;
}


export class GetDetachLoadBalancersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
