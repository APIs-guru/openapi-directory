import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateRouteTableActionEnum {
    AssociateRouteTable = "AssociateRouteTable"
}

export enum GetAssociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateRouteTableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateRouteTableActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GatewayId" })
  gatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateRouteTableVersionEnum;
}


export class GetAssociateRouteTableHeaders extends SpeakeasyBase {
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


export class GetAssociateRouteTableRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateRouteTableQueryParams;

  @Metadata()
  headers: GetAssociateRouteTableHeaders;
}


export class GetAssociateRouteTableResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
