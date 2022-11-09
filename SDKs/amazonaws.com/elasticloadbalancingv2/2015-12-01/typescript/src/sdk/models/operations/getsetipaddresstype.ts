import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetIpAddressTypeActionEnum {
    SetIpAddressType = "SetIpAddressType"
}

export enum GetSetIpAddressTypeIpAddressTypeEnum {
    Ipv4 = "ipv4"
,    Dualstack = "dualstack"
}

export enum GetSetIpAddressTypeVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetSetIpAddressTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIpAddressTypeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IpAddressType" })
  ipAddressType: GetSetIpAddressTypeIpAddressTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" })
  loadBalancerArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIpAddressTypeVersionEnum;
}


export class GetSetIpAddressTypeHeaders extends SpeakeasyBase {
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


export class GetSetIpAddressTypeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetIpAddressTypeQueryParams;

  @Metadata()
  headers: GetSetIpAddressTypeHeaders;
}


export class GetSetIpAddressTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
