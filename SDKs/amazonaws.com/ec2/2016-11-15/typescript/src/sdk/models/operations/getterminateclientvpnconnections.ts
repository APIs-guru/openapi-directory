import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTerminateClientVpnConnectionsActionEnum {
    TerminateClientVpnConnections = "TerminateClientVpnConnections"
}

export enum GetTerminateClientVpnConnectionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetTerminateClientVpnConnectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTerminateClientVpnConnectionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Username" })
  username?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTerminateClientVpnConnectionsVersionEnum;
}


export class GetTerminateClientVpnConnectionsHeaders extends SpeakeasyBase {
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


export class GetTerminateClientVpnConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTerminateClientVpnConnectionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetTerminateClientVpnConnectionsHeaders;
}


export class GetTerminateClientVpnConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
