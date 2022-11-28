import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDetachVpnGatewayActionEnum {
    DetachVpnGateway = "DetachVpnGateway"
}

export enum GetDetachVpnGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDetachVpnGatewayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachVpnGatewayActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachVpnGatewayVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnGatewayId" })
  vpnGatewayId: string;
}


export class GetDetachVpnGatewayHeaders extends SpeakeasyBase {
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


export class GetDetachVpnGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDetachVpnGatewayQueryParams;

  @SpeakeasyMetadata()
  headers: GetDetachVpnGatewayHeaders;
}


export class GetDetachVpnGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
