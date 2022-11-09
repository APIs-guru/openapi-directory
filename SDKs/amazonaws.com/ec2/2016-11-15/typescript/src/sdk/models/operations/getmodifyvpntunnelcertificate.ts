import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVpnTunnelCertificateActionEnum {
    ModifyVpnTunnelCertificate = "ModifyVpnTunnelCertificate"
}

export enum GetModifyVpnTunnelCertificateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpnTunnelCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpnTunnelCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpnTunnelCertificateVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" })
  vpnConnectionId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpnTunnelOutsideIpAddress" })
  vpnTunnelOutsideIpAddress: string;
}


export class GetModifyVpnTunnelCertificateHeaders extends SpeakeasyBase {
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


export class GetModifyVpnTunnelCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpnTunnelCertificateQueryParams;

  @Metadata()
  headers: GetModifyVpnTunnelCertificateHeaders;
}


export class GetModifyVpnTunnelCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
