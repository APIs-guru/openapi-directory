import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteTransitGatewayMulticastDomainActionEnum {
    DeleteTransitGatewayMulticastDomain = "DeleteTransitGatewayMulticastDomain"
}

export enum GetDeleteTransitGatewayMulticastDomainVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteTransitGatewayMulticastDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteTransitGatewayMulticastDomainActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" })
  transitGatewayMulticastDomainId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteTransitGatewayMulticastDomainVersionEnum;
}


export class GetDeleteTransitGatewayMulticastDomainHeaders extends SpeakeasyBase {
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


export class GetDeleteTransitGatewayMulticastDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteTransitGatewayMulticastDomainQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteTransitGatewayMulticastDomainHeaders;
}


export class GetDeleteTransitGatewayMulticastDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
