import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAcceptTransitGatewayVpcAttachmentActionEnum {
    AcceptTransitGatewayVpcAttachment = "AcceptTransitGatewayVpcAttachment"
}

export enum GetAcceptTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAcceptTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptTransitGatewayVpcAttachmentActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptTransitGatewayVpcAttachmentVersionEnum;
}


export class GetAcceptTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
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


export class GetAcceptTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAcceptTransitGatewayVpcAttachmentQueryParams;

  @SpeakeasyMetadata()
  headers: GetAcceptTransitGatewayVpcAttachmentHeaders;
}


export class GetAcceptTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
