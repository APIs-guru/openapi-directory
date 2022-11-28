import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetIpAddressTypeActionEnum {
    SetIpAddressType = "SetIpAddressType"
}

export enum GetSetIpAddressTypeIpAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack"
}

export enum GetSetIpAddressTypeVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetSetIpAddressTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIpAddressTypeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IpAddressType" })
  ipAddressType: GetSetIpAddressTypeIpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" })
  loadBalancerArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIpAddressTypeVersionEnum;
}


export class GetSetIpAddressTypeHeaders extends SpeakeasyBase {
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


export class GetSetIpAddressTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetIpAddressTypeQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetIpAddressTypeHeaders;
}


export class GetSetIpAddressTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
