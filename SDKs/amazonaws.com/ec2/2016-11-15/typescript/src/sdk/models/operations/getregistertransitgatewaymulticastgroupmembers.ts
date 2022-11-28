import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRegisterTransitGatewayMulticastGroupMembersActionEnum {
    RegisterTransitGatewayMulticastGroupMembers = "RegisterTransitGatewayMulticastGroupMembers"
}

export enum GetRegisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRegisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterTransitGatewayMulticastGroupMembersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" })
  groupIpAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterTransitGatewayMulticastGroupMembersVersionEnum;
}


export class GetRegisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
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


export class GetRegisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegisterTransitGatewayMulticastGroupMembersQueryParams;

  @SpeakeasyMetadata()
  headers: GetRegisterTransitGatewayMulticastGroupMembersHeaders;
}


export class GetRegisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
