import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateTransitGatewayRouteTableActionEnum {
    AssociateTransitGatewayRouteTable = "AssociateTransitGatewayRouteTable"
}

export enum GetAssociateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateTransitGatewayRouteTableActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" })
  transitGatewayRouteTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateTransitGatewayRouteTableVersionEnum;
}


export class GetAssociateTransitGatewayRouteTableHeaders extends SpeakeasyBase {
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


export class GetAssociateTransitGatewayRouteTableRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateTransitGatewayRouteTableQueryParams;

  @Metadata()
  headers: GetAssociateTransitGatewayRouteTableHeaders;
}


export class GetAssociateTransitGatewayRouteTableResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
