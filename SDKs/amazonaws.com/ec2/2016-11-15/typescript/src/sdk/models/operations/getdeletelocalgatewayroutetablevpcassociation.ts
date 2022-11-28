import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum {
    DeleteLocalGatewayRouteTableVpcAssociation = "DeleteLocalGatewayRouteTableVpcAssociation"
}

export enum GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayRouteTableVpcAssociationId" })
  localGatewayRouteTableVpcAssociationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum;
}


export class GetDeleteLocalGatewayRouteTableVpcAssociationHeaders extends SpeakeasyBase {
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


export class GetDeleteLocalGatewayRouteTableVpcAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteLocalGatewayRouteTableVpcAssociationHeaders;
}


export class GetDeleteLocalGatewayRouteTableVpcAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
