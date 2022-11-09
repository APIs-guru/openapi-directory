import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeregisterTransitGatewayMulticastGroupMembersActionEnum {
    DeregisterTransitGatewayMulticastGroupMembers = "DeregisterTransitGatewayMulticastGroupMembers"
}

export enum GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeregisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeregisterTransitGatewayMulticastGroupMembersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" })
  groupIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeregisterTransitGatewayMulticastGroupMembersVersionEnum;
}


export class GetDeregisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
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


export class GetDeregisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeregisterTransitGatewayMulticastGroupMembersQueryParams;

  @Metadata()
  headers: GetDeregisterTransitGatewayMulticastGroupMembersHeaders;
}


export class GetDeregisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
