import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAcceptTransitGatewayVpcAttachmentActionEnum {
    AcceptTransitGatewayVpcAttachment = "AcceptTransitGatewayVpcAttachment"
}

export enum GetAcceptTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAcceptTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAcceptTransitGatewayVpcAttachmentActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAcceptTransitGatewayVpcAttachmentVersionEnum;
}


export class GetAcceptTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
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


export class GetAcceptTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAcceptTransitGatewayVpcAttachmentQueryParams;

  @Metadata()
  headers: GetAcceptTransitGatewayVpcAttachmentHeaders;
}


export class GetAcceptTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
