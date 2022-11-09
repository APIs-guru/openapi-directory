import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssignIpv6AddressesActionEnum {
    AssignIpv6Addresses = "AssignIpv6Addresses"
}

export enum GetAssignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssignIpv6AddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssignIpv6AddressesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6AddressCount" })
  ipv6AddressCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6Addresses" })
  ipv6Addresses?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6Prefix" })
  ipv6Prefix?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6PrefixCount" })
  ipv6PrefixCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssignIpv6AddressesVersionEnum;
}


export class GetAssignIpv6AddressesHeaders extends SpeakeasyBase {
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


export class GetAssignIpv6AddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssignIpv6AddressesQueryParams;

  @Metadata()
  headers: GetAssignIpv6AddressesHeaders;
}


export class GetAssignIpv6AddressesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
