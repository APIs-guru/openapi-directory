import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVpnTunnelCertificateActionEnum {
    ModifyVpnTunnelCertificate = "ModifyVpnTunnelCertificate"
}

export enum GetModifyVpnTunnelCertificateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpnTunnelCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpnTunnelCertificateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpnTunnelCertificateVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" })
  vpnConnectionId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnTunnelOutsideIpAddress" })
  vpnTunnelOutsideIpAddress: string;
}


export class GetModifyVpnTunnelCertificateHeaders extends SpeakeasyBase {
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


export class GetModifyVpnTunnelCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVpnTunnelCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVpnTunnelCertificateHeaders;
}


export class GetModifyVpnTunnelCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
