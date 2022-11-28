import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUnassignIpv6AddressesActionEnum {
    UnassignIpv6Addresses = "UnassignIpv6Addresses"
}

export enum GetUnassignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetUnassignIpv6AddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUnassignIpv6AddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Addresses" })
  ipv6Addresses?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Prefix" })
  ipv6Prefix?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUnassignIpv6AddressesVersionEnum;
}


export class GetUnassignIpv6AddressesHeaders extends SpeakeasyBase {
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


export class GetUnassignIpv6AddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUnassignIpv6AddressesQueryParams;

  @SpeakeasyMetadata()
  headers: GetUnassignIpv6AddressesHeaders;
}


export class GetUnassignIpv6AddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
