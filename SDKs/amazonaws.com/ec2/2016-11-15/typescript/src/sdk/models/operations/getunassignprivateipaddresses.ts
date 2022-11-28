import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUnassignPrivateIpAddressesActionEnum {
    UnassignPrivateIpAddresses = "UnassignPrivateIpAddresses"
}

export enum GetUnassignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetUnassignPrivateIpAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUnassignPrivateIpAddressesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv4Prefix" })
  ipv4Prefix?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" })
  privateIpAddress?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUnassignPrivateIpAddressesVersionEnum;
}


export class GetUnassignPrivateIpAddressesHeaders extends SpeakeasyBase {
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


export class GetUnassignPrivateIpAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUnassignPrivateIpAddressesQueryParams;

  @SpeakeasyMetadata()
  headers: GetUnassignPrivateIpAddressesHeaders;
}


export class GetUnassignPrivateIpAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
