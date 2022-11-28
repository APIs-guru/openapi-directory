import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetModifyTransitGatewayActionEnum {
    ModifyTransitGateway = "ModifyTransitGateway"
}


// GetModifyTransitGatewayOptions
/** 
 * The transit gateway options.
**/
export class GetModifyTransitGatewayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=AddTransitGatewayCidrBlocks" })
  addTransitGatewayCidrBlocks?: string[];

  @SpeakeasyMetadata({ data: "queryParam, name=AssociationDefaultRouteTableId" })
  associationDefaultRouteTableId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=AutoAcceptSharedAttachments" })
  autoAcceptSharedAttachments?: shared.AutoAcceptSharedAttachmentsValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=DefaultRouteTableAssociation" })
  defaultRouteTableAssociation?: shared.DefaultRouteTableAssociationValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=DefaultRouteTablePropagation" })
  defaultRouteTablePropagation?: shared.DefaultRouteTablePropagationValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=DnsSupport" })
  dnsSupport?: shared.DnsSupportValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=PropagationDefaultRouteTableId" })
  propagationDefaultRouteTableId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=RemoveTransitGatewayCidrBlocks" })
  removeTransitGatewayCidrBlocks?: string[];

  @SpeakeasyMetadata({ data: "queryParam, name=VpnEcmpSupport" })
  vpnEcmpSupport?: shared.VpnEcmpSupportValueEnum;
}

export enum GetModifyTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTransitGatewayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTransitGatewayActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Options" })
  options?: GetModifyTransitGatewayOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" })
  transitGatewayId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTransitGatewayVersionEnum;
}


export class GetModifyTransitGatewayHeaders extends SpeakeasyBase {
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


export class GetModifyTransitGatewayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyTransitGatewayQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyTransitGatewayHeaders;
}


export class GetModifyTransitGatewayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
