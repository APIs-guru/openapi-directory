import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVpnConnectionActionEnum {
    ModifyVpnConnection = "ModifyVpnConnection"
}

export enum GetModifyVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpnConnectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpnConnectionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CustomerGatewayId" })
  customerGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" })
  transitGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpnConnectionVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" })
  vpnConnectionId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnGatewayId" })
  vpnGatewayId?: string;
}


export class GetModifyVpnConnectionHeaders extends SpeakeasyBase {
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


export class GetModifyVpnConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVpnConnectionQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVpnConnectionHeaders;
}


export class GetModifyVpnConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
