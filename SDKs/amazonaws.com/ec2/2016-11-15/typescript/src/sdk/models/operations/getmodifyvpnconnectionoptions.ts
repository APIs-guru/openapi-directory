import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVpnConnectionOptionsActionEnum {
    ModifyVpnConnectionOptions = "ModifyVpnConnectionOptions"
}

export enum GetModifyVpnConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpnConnectionOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpnConnectionOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LocalIpv4NetworkCidr" })
  localIpv4NetworkCidr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LocalIpv6NetworkCidr" })
  localIpv6NetworkCidr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoteIpv4NetworkCidr" })
  remoteIpv4NetworkCidr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoteIpv6NetworkCidr" })
  remoteIpv6NetworkCidr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpnConnectionOptionsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" })
  vpnConnectionId: string;
}


export class GetModifyVpnConnectionOptionsHeaders extends SpeakeasyBase {
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


export class GetModifyVpnConnectionOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpnConnectionOptionsQueryParams;

  @Metadata()
  headers: GetModifyVpnConnectionOptionsHeaders;
}


export class GetModifyVpnConnectionOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
