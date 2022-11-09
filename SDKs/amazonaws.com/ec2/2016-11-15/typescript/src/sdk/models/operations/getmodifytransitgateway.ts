import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetModifyTransitGatewayActionEnum {
    ModifyTransitGateway = "ModifyTransitGateway"
}


// GetModifyTransitGatewayOptions
/** 
 * The transit gateway options.
**/
export class GetModifyTransitGatewayOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=AddTransitGatewayCidrBlocks" })
  addTransitGatewayCidrBlocks?: string[];

  @Metadata({ data: "queryParam, name=AssociationDefaultRouteTableId" })
  associationDefaultRouteTableId?: string;

  @Metadata({ data: "queryParam, name=AutoAcceptSharedAttachments" })
  autoAcceptSharedAttachments?: shared.AutoAcceptSharedAttachmentsValueEnum;

  @Metadata({ data: "queryParam, name=DefaultRouteTableAssociation" })
  defaultRouteTableAssociation?: shared.DefaultRouteTableAssociationValueEnum;

  @Metadata({ data: "queryParam, name=DefaultRouteTablePropagation" })
  defaultRouteTablePropagation?: shared.DefaultRouteTablePropagationValueEnum;

  @Metadata({ data: "queryParam, name=DnsSupport" })
  dnsSupport?: shared.DnsSupportValueEnum;

  @Metadata({ data: "queryParam, name=PropagationDefaultRouteTableId" })
  propagationDefaultRouteTableId?: string;

  @Metadata({ data: "queryParam, name=RemoveTransitGatewayCidrBlocks" })
  removeTransitGatewayCidrBlocks?: string[];

  @Metadata({ data: "queryParam, name=VpnEcmpSupport" })
  vpnEcmpSupport?: shared.VpnEcmpSupportValueEnum;
}

export enum GetModifyTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTransitGatewayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTransitGatewayActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Options" })
  options?: GetModifyTransitGatewayOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" })
  transitGatewayId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTransitGatewayVersionEnum;
}


export class GetModifyTransitGatewayHeaders extends SpeakeasyBase {
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


export class GetModifyTransitGatewayRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyTransitGatewayQueryParams;

  @Metadata()
  headers: GetModifyTransitGatewayHeaders;
}


export class GetModifyTransitGatewayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
