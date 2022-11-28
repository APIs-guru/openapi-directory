import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRegisterTransitGatewayMulticastGroupSourcesActionEnum {
    RegisterTransitGatewayMulticastGroupSources = "RegisterTransitGatewayMulticastGroupSources"
}

export enum GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRegisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterTransitGatewayMulticastGroupSourcesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupIpAddress" })
  groupIpAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceIds" })
  networkInterfaceIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterTransitGatewayMulticastGroupSourcesVersionEnum;
}


export class GetRegisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
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


export class GetRegisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegisterTransitGatewayMulticastGroupSourcesQueryParams;

  @SpeakeasyMetadata()
  headers: GetRegisterTransitGatewayMulticastGroupSourcesHeaders;
}


export class GetRegisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
