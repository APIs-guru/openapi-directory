import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteRouteActionEnum {
    DeleteRoute = "DeleteRoute"
}

export enum GetDeleteRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteRouteActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteRouteVersionEnum;
}


export class GetDeleteRouteHeaders extends SpeakeasyBase {
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


export class GetDeleteRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteRouteQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteRouteHeaders;
}


export class GetDeleteRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
