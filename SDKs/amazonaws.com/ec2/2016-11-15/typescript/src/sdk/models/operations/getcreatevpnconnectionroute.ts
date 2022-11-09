import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateVpnConnectionRouteActionEnum {
    CreateVpnConnectionRoute = "CreateVpnConnectionRoute"
}

export enum GetCreateVpnConnectionRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateVpnConnectionRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateVpnConnectionRouteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateVpnConnectionRouteVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" })
  vpnConnectionId: string;
}


export class GetCreateVpnConnectionRouteHeaders extends SpeakeasyBase {
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


export class GetCreateVpnConnectionRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateVpnConnectionRouteQueryParams;

  @Metadata()
  headers: GetCreateVpnConnectionRouteHeaders;
}


export class GetCreateVpnConnectionRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
