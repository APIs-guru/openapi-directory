import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyClientVpnEndpointActionEnum {
    ModifyClientVpnEndpoint = "ModifyClientVpnEndpoint"
}


// GetModifyClientVpnEndpointClientConnectOptions
/** 
 * The options for managing connection authorization for new client connections.
**/
export class GetModifyClientVpnEndpointClientConnectOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "queryParam, name=LambdaFunctionArn" })
  lambdaFunctionArn?: string;
}


// GetModifyClientVpnEndpointConnectionLogOptions
/** 
 * Describes the client connection logging options for the Client VPN endpoint.
**/
export class GetModifyClientVpnEndpointConnectionLogOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=CloudwatchLogGroup" })
  cloudwatchLogGroup?: string;

  @Metadata({ data: "queryParam, name=CloudwatchLogStream" })
  cloudwatchLogStream?: string;

  @Metadata({ data: "queryParam, name=Enabled" })
  enabled?: boolean;
}


// GetModifyClientVpnEndpointDnsServers
/** 
 * Information about the DNS server to be used.
**/
export class GetModifyClientVpnEndpointDnsServers extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=CustomDnsServers" })
  customDnsServers?: string[];

  @Metadata({ data: "queryParam, name=Enabled" })
  enabled?: boolean;
}

export enum GetModifyClientVpnEndpointSelfServicePortalEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum GetModifyClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyClientVpnEndpointQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClientVpnEndpointActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientConnectOptions" })
  clientConnectOptions?: GetModifyClientVpnEndpointClientConnectOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionLogOptions" })
  connectionLogOptions?: GetModifyClientVpnEndpointConnectionLogOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DnsServers" })
  dnsServers?: GetModifyClientVpnEndpointDnsServers;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" })
  securityGroupId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SelfServicePortal" })
  selfServicePortal?: GetModifyClientVpnEndpointSelfServicePortalEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateArn" })
  serverCertificateArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SplitTunnel" })
  splitTunnel?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClientVpnEndpointVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpnPort" })
  vpnPort?: number;
}


export class GetModifyClientVpnEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyClientVpnEndpointRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyClientVpnEndpointQueryParams;

  @Metadata()
  headers: GetModifyClientVpnEndpointHeaders;
}


export class GetModifyClientVpnEndpointResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
