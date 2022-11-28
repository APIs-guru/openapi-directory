import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisableTransitGatewayRouteTablePropagationActionEnum {
    DisableTransitGatewayRouteTablePropagation = "DisableTransitGatewayRouteTablePropagation"
}

export enum GetDisableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisableTransitGatewayRouteTablePropagationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableTransitGatewayRouteTablePropagationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" })
  transitGatewayRouteTableId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableTransitGatewayRouteTablePropagationVersionEnum;
}


export class GetDisableTransitGatewayRouteTablePropagationHeaders extends SpeakeasyBase {
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


export class GetDisableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisableTransitGatewayRouteTablePropagationQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisableTransitGatewayRouteTablePropagationHeaders;
}


export class GetDisableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
