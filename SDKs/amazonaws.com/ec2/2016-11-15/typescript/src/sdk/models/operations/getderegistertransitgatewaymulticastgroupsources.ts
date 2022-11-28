import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum {
    DeregisterTransitGatewayMulticastGroupSources = "DeregisterTransitGatewayMulticastGroupSources"
}

export enum GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeregisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeregisterTransitGatewayMulticastGroupSourcesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" })
  groupIpAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeregisterTransitGatewayMulticastGroupSourcesVersionEnum;
}


export class GetDeregisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
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


export class GetDeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeregisterTransitGatewayMulticastGroupSourcesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeregisterTransitGatewayMulticastGroupSourcesHeaders;
}


export class GetDeregisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
