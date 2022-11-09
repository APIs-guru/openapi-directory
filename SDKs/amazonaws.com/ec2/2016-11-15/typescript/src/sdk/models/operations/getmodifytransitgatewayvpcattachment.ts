import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetModifyTransitGatewayVpcAttachmentActionEnum {
    ModifyTransitGatewayVpcAttachment = "ModifyTransitGatewayVpcAttachment"
}


// GetModifyTransitGatewayVpcAttachmentOptions
/** 
 * Describes the options for a VPC attachment.
**/
export class GetModifyTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=ApplianceModeSupport" })
  applianceModeSupport?: shared.ApplianceModeSupportValueEnum;

  @Metadata({ data: "queryParam, name=DnsSupport" })
  dnsSupport?: shared.DnsSupportValueEnum;

  @Metadata({ data: "queryParam, name=Ipv6Support" })
  ipv6Support?: shared.Ipv6SupportValueEnum;
}

export enum GetModifyTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTransitGatewayVpcAttachmentActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddSubnetIds" })
  addSubnetIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Options" })
  options?: GetModifyTransitGatewayVpcAttachmentOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveSubnetIds" })
  removeSubnetIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTransitGatewayVpcAttachmentVersionEnum;
}


export class GetModifyTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
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


export class GetModifyTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyTransitGatewayVpcAttachmentQueryParams;

  @Metadata()
  headers: GetModifyTransitGatewayVpcAttachmentHeaders;
}


export class GetModifyTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
