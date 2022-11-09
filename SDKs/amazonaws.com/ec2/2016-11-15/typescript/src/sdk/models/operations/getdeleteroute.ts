import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteRouteActionEnum {
    DeleteRoute = "DeleteRoute"
}

export enum GetDeleteRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteRouteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteRouteVersionEnum;
}


export class GetDeleteRouteHeaders extends SpeakeasyBase {
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


export class GetDeleteRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteRouteQueryParams;

  @Metadata()
  headers: GetDeleteRouteHeaders;
}


export class GetDeleteRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
