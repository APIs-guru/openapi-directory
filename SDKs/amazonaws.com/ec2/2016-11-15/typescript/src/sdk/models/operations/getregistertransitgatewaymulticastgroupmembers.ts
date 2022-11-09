import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRegisterTransitGatewayMulticastGroupMembersActionEnum {
    RegisterTransitGatewayMulticastGroupMembers = "RegisterTransitGatewayMulticastGroupMembers"
}

export enum GetRegisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRegisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterTransitGatewayMulticastGroupMembersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" })
  groupIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterTransitGatewayMulticastGroupMembersVersionEnum;
}


export class GetRegisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
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


export class GetRegisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegisterTransitGatewayMulticastGroupMembersQueryParams;

  @Metadata()
  headers: GetRegisterTransitGatewayMulticastGroupMembersHeaders;
}


export class GetRegisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
