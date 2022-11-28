import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssignIpv6AddressesActionEnum {
    AssignIpv6Addresses = "AssignIpv6Addresses"
}

export enum GetAssignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssignIpv6AddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssignIpv6AddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6AddressCount" })
  ipv6AddressCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Addresses" })
  ipv6Addresses?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6Prefix" })
  ipv6Prefix?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6PrefixCount" })
  ipv6PrefixCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssignIpv6AddressesVersionEnum;
}


export class GetAssignIpv6AddressesHeaders extends SpeakeasyBase {
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


export class GetAssignIpv6AddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssignIpv6AddressesQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssignIpv6AddressesHeaders;
}


export class GetAssignIpv6AddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
