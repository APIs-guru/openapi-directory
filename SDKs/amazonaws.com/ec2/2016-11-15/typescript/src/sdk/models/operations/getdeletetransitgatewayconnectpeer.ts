import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteTransitGatewayConnectPeerActionEnum {
    DeleteTransitGatewayConnectPeer = "DeleteTransitGatewayConnectPeer"
}

export enum GetDeleteTransitGatewayConnectPeerVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteTransitGatewayConnectPeerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteTransitGatewayConnectPeerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayConnectPeerId" })
  transitGatewayConnectPeerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteTransitGatewayConnectPeerVersionEnum;
}


export class GetDeleteTransitGatewayConnectPeerHeaders extends SpeakeasyBase {
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


export class GetDeleteTransitGatewayConnectPeerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteTransitGatewayConnectPeerQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteTransitGatewayConnectPeerHeaders;
}


export class GetDeleteTransitGatewayConnectPeerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
