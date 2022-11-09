import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssignPrivateIpAddressesActionEnum {
    AssignPrivateIpAddresses = "AssignPrivateIpAddresses"
}

export enum GetAssignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssignPrivateIpAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssignPrivateIpAddressesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowReassignment" })
  allowReassignment?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv4Prefix" })
  ipv4Prefix?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv4PrefixCount" })
  ipv4PrefixCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" })
  privateIpAddress?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecondaryPrivateIpAddressCount" })
  secondaryPrivateIpAddressCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssignPrivateIpAddressesVersionEnum;
}


export class GetAssignPrivateIpAddressesHeaders extends SpeakeasyBase {
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


export class GetAssignPrivateIpAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssignPrivateIpAddressesQueryParams;

  @Metadata()
  headers: GetAssignPrivateIpAddressesHeaders;
}


export class GetAssignPrivateIpAddressesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
