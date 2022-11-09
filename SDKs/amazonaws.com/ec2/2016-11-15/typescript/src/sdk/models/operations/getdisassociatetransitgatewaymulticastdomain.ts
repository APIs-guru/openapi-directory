import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisassociateTransitGatewayMulticastDomainActionEnum {
    DisassociateTransitGatewayMulticastDomain = "DisassociateTransitGatewayMulticastDomain"
}

export enum GetDisassociateTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateTransitGatewayMulticastDomainActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateTransitGatewayMulticastDomainVersionEnum;
}


export class GetDisassociateTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
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


export class GetDisassociateTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisassociateTransitGatewayMulticastDomainQueryParams;

  @Metadata()
  headers: GetDisassociateTransitGatewayMulticastDomainHeaders;
}


export class GetDisassociateTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
