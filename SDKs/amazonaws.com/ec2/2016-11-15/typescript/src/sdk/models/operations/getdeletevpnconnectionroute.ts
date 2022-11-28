import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteVpnConnectionRouteActionEnum {
    DeleteVpnConnectionRoute = "DeleteVpnConnectionRoute"
}

export enum GetDeleteVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteVpnConnectionRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVpnConnectionRouteActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVpnConnectionRouteVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" })
  vpnConnectionId: string;
}


export class GetDeleteVpnConnectionRouteHeaders extends SpeakeasyBase {
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


export class GetDeleteVpnConnectionRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteVpnConnectionRouteQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteVpnConnectionRouteHeaders;
}


export class GetDeleteVpnConnectionRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
