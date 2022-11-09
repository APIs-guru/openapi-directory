import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUnassignPrivateIpAddressesActionEnum {
    UnassignPrivateIpAddresses = "UnassignPrivateIpAddresses"
}

export enum GetUnassignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetUnassignPrivateIpAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUnassignPrivateIpAddressesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv4Prefix" })
  ipv4Prefix?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" })
  privateIpAddress?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUnassignPrivateIpAddressesVersionEnum;
}


export class GetUnassignPrivateIpAddressesHeaders extends SpeakeasyBase {
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


export class GetUnassignPrivateIpAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUnassignPrivateIpAddressesQueryParams;

  @Metadata()
  headers: GetUnassignPrivateIpAddressesHeaders;
}


export class GetUnassignPrivateIpAddressesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
