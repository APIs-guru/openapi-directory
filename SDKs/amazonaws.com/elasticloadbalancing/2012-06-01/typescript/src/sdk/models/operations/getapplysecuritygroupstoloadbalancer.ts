import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApplySecurityGroupsToLoadBalancerActionEnum {
    ApplySecurityGroupsToLoadBalancer = "ApplySecurityGroupsToLoadBalancer"
}

export enum GetApplySecurityGroupsToLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetApplySecurityGroupsToLoadBalancerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetApplySecurityGroupsToLoadBalancerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroups" })
  securityGroups: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetApplySecurityGroupsToLoadBalancerVersionEnum;
}


export class GetApplySecurityGroupsToLoadBalancerHeaders extends SpeakeasyBase {
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


export class GetApplySecurityGroupsToLoadBalancerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApplySecurityGroupsToLoadBalancerQueryParams;

  @Metadata()
  headers: GetApplySecurityGroupsToLoadBalancerHeaders;
}


export class GetApplySecurityGroupsToLoadBalancerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
