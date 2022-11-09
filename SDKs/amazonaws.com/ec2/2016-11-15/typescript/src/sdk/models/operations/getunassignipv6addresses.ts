import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUnassignIpv6AddressesActionEnum {
    UnassignIpv6Addresses = "UnassignIpv6Addresses"
}

export enum GetUnassignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetUnassignIpv6AddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUnassignIpv6AddressesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6Addresses" })
  ipv6Addresses?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6Prefix" })
  ipv6Prefix?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUnassignIpv6AddressesVersionEnum;
}


export class GetUnassignIpv6AddressesHeaders extends SpeakeasyBase {
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


export class GetUnassignIpv6AddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUnassignIpv6AddressesQueryParams;

  @Metadata()
  headers: GetUnassignIpv6AddressesHeaders;
}


export class GetUnassignIpv6AddressesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
