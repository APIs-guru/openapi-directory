import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteLocalGatewayRouteActionEnum {
    DeleteLocalGatewayRoute = "DeleteLocalGatewayRoute"
}

export enum GetDeleteLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteLocalGatewayRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLocalGatewayRouteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayRouteTableId" })
  localGatewayRouteTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLocalGatewayRouteVersionEnum;
}


export class GetDeleteLocalGatewayRouteHeaders extends SpeakeasyBase {
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


export class GetDeleteLocalGatewayRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteLocalGatewayRouteQueryParams;

  @Metadata()
  headers: GetDeleteLocalGatewayRouteHeaders;
}


export class GetDeleteLocalGatewayRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
