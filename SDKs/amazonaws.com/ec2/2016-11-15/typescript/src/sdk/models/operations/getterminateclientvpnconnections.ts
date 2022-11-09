import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTerminateClientVpnConnectionsActionEnum {
    TerminateClientVpnConnections = "TerminateClientVpnConnections"
}

export enum GetTerminateClientVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetTerminateClientVpnConnectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTerminateClientVpnConnectionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionId" })
  connectionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Username" })
  username?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTerminateClientVpnConnectionsVersionEnum;
}


export class GetTerminateClientVpnConnectionsHeaders extends SpeakeasyBase {
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


export class GetTerminateClientVpnConnectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTerminateClientVpnConnectionsQueryParams;

  @Metadata()
  headers: GetTerminateClientVpnConnectionsHeaders;
}


export class GetTerminateClientVpnConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
