import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyClientVpnEndpointActionEnum {
    ModifyClientVpnEndpoint = "ModifyClientVpnEndpoint"
}


// GetModifyClientVpnEndpointClientConnectOptions
/** 
 * The options for managing connection authorization for new client connections.
**/
export class GetModifyClientVpnEndpointClientConnectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=LambdaFunctionArn" })
  lambdaFunctionArn?: string;
}


// GetModifyClientVpnEndpointConnectionLogOptions
/** 
 * Describes the client connection logging options for the Client VPN endpoint.
**/
export class GetModifyClientVpnEndpointConnectionLogOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=CloudwatchLogGroup" })
  cloudwatchLogGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=CloudwatchLogStream" })
  cloudwatchLogStream?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=Enabled" })
  enabled?: boolean;
}


// GetModifyClientVpnEndpointDnsServers
/** 
 * Information about the DNS server to be used.
**/
export class GetModifyClientVpnEndpointDnsServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=CustomDnsServers" })
  customDnsServers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, name=Enabled" })
  enabled?: boolean;
}

export enum GetModifyClientVpnEndpointSelfServicePortalEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum GetModifyClientVpnEndpointVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyClientVpnEndpointQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClientVpnEndpointActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientConnectOptions" })
  clientConnectOptions?: GetModifyClientVpnEndpointClientConnectOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionLogOptions" })
  connectionLogOptions?: GetModifyClientVpnEndpointConnectionLogOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DnsServers" })
  dnsServers?: GetModifyClientVpnEndpointDnsServers;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" })
  securityGroupId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SelfServicePortal" })
  selfServicePortal?: GetModifyClientVpnEndpointSelfServicePortalEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateArn" })
  serverCertificateArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SplitTunnel" })
  splitTunnel?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClientVpnEndpointVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpnPort" })
  vpnPort?: number;
}


export class GetModifyClientVpnEndpointHeaders extends SpeakeasyBase {
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


export class GetModifyClientVpnEndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyClientVpnEndpointQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyClientVpnEndpointHeaders;
}


export class GetModifyClientVpnEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
