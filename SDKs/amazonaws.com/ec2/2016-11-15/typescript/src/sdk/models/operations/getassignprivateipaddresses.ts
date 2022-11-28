import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssignPrivateIpAddressesActionEnum {
    AssignPrivateIpAddresses = "AssignPrivateIpAddresses"
}

export enum GetAssignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssignPrivateIpAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssignPrivateIpAddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowReassignment" })
  allowReassignment?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv4Prefix" })
  ipv4Prefix?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv4PrefixCount" })
  ipv4PrefixCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" })
  privateIpAddress?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecondaryPrivateIpAddressCount" })
  secondaryPrivateIpAddressCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssignPrivateIpAddressesVersionEnum;
}


export class GetAssignPrivateIpAddressesHeaders extends SpeakeasyBase {
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


export class GetAssignPrivateIpAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssignPrivateIpAddressesQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssignPrivateIpAddressesHeaders;
}


export class GetAssignPrivateIpAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
