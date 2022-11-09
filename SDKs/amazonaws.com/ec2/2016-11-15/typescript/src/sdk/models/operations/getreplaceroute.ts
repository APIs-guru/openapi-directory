import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}

export enum GetReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceRouteActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CarrierGatewayId" })
  carrierGatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EgressOnlyInternetGatewayId" })
  egressOnlyInternetGatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GatewayId" })
  gatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LocalGatewayId" })
  localGatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LocalTarget" })
  localTarget?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NatGatewayId" })
  natGatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RouteTableId" })
  routeTableId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayId" })
  transitGatewayId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceRouteVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcEndpointId" })
  vpcEndpointId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId?: string;
}


export class GetReplaceRouteHeaders extends SpeakeasyBase {
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


export class GetReplaceRouteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReplaceRouteQueryParams;

  @Metadata()
  headers: GetReplaceRouteHeaders;
}


export class GetReplaceRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
