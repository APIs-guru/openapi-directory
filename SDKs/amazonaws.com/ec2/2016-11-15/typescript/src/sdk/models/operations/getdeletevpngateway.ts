import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteVpnGatewayActionEnum {
    DeleteVpnGateway = "DeleteVpnGateway"
}

export enum GetDeleteVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteVpnGatewayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteVpnGatewayActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteVpnGatewayVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnGatewayId" })
  vpnGatewayId: string;
}


export class GetDeleteVpnGatewayHeaders extends SpeakeasyBase {
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


export class GetDeleteVpnGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteVpnGatewayQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteVpnGatewayHeaders;
}


export class GetDeleteVpnGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
