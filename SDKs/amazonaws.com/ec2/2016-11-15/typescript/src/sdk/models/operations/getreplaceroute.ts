import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}

export enum GetReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceRouteActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CarrierGatewayId" })
  carrierGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EgressOnlyInternetGatewayId" })
  egressOnlyInternetGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayId" })
  localGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LocalTarget" })
  localTarget?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NatGatewayId" })
  natGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" })
  transitGatewayId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceRouteVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId?: string;
}


export class GetReplaceRouteHeaders extends SpeakeasyBase {
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


export class GetReplaceRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReplaceRouteQueryParams;

  @SpeakeasyMetadata()
  headers: GetReplaceRouteHeaders;
}


export class GetReplaceRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
