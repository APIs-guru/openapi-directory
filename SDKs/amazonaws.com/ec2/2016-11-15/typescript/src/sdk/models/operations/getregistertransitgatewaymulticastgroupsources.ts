import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRegisterTransitGatewayMulticastGroupSourcesActionEnum {
    RegisterTransitGatewayMulticastGroupSources = "RegisterTransitGatewayMulticastGroupSources"
}

export enum GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRegisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterTransitGatewayMulticastGroupSourcesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" })
  groupIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum;
}


export class GetRegisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
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


export class GetRegisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegisterTransitGatewayMulticastGroupSourcesQueryParams;

  @Metadata()
  headers: GetRegisterTransitGatewayMulticastGroupSourcesHeaders;
}


export class GetRegisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
