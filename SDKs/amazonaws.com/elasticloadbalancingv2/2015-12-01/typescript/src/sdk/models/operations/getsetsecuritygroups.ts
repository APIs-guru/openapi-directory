import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetSecurityGroupsActionEnum {
    SetSecurityGroups = "SetSecurityGroups"
}

export enum GetSetSecurityGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetSetSecurityGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetSecurityGroupsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" })
  loadBalancerArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroups" })
  securityGroups: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetSecurityGroupsVersionEnum;
}


export class GetSetSecurityGroupsHeaders extends SpeakeasyBase {
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


export class GetSetSecurityGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetSecurityGroupsQueryParams;

  @Metadata()
  headers: GetSetSecurityGroupsHeaders;
}


export class GetSetSecurityGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
