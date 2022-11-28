import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRejectTransitGatewayMulticastDomainAssociationsActionEnum {
    RejectTransitGatewayMulticastDomainAssociations = "RejectTransitGatewayMulticastDomainAssociations"
}

export enum GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRejectTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRejectTransitGatewayMulticastDomainAssociationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRejectTransitGatewayMulticastDomainAssociationsVersionEnum;
}


export class GetRejectTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
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


export class GetRejectTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRejectTransitGatewayMulticastDomainAssociationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetRejectTransitGatewayMulticastDomainAssociationsHeaders;
}


export class GetRejectTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
