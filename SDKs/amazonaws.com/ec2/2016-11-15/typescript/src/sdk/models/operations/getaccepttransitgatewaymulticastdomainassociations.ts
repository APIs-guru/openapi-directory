import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum {
    AcceptTransitGatewayMulticastDomainAssociations = "AcceptTransitGatewayMulticastDomainAssociations"
}

export enum GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptTransitGatewayMulticastDomainAssociationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptTransitGatewayMulticastDomainAssociationsVersionEnum;
}


export class GetAcceptTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
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


export class GetAcceptTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAcceptTransitGatewayMulticastDomainAssociationsQueryParams;

  @Metadata()
  headers: GetAcceptTransitGatewayMulticastDomainAssociationsHeaders;
}


export class GetAcceptTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
