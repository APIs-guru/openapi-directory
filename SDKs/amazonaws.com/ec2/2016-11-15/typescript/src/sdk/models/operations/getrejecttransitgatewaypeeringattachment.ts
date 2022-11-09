import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRejectTransitGatewayPeeringAttachmentActionEnum {
    RejectTransitGatewayPeeringAttachment = "RejectTransitGatewayPeeringAttachment"
}

export enum GetRejectTransitGatewayPeeringAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRejectTransitGatewayPeeringAttachmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRejectTransitGatewayPeeringAttachmentActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRejectTransitGatewayPeeringAttachmentVersionEnum;
}


export class GetRejectTransitGatewayPeeringAttachmentHeaders extends SpeakeasyBase {
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


export class GetRejectTransitGatewayPeeringAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRejectTransitGatewayPeeringAttachmentQueryParams;

  @Metadata()
  headers: GetRejectTransitGatewayPeeringAttachmentHeaders;
}


export class GetRejectTransitGatewayPeeringAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
