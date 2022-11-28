import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetModifyTransitGatewayVpcAttachmentActionEnum {
    ModifyTransitGatewayVpcAttachment = "ModifyTransitGatewayVpcAttachment"
}


// GetModifyTransitGatewayVpcAttachmentOptions
/** 
 * Describes the options for a VPC attachment.
**/
export class GetModifyTransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=ApplianceModeSupport" })
  applianceModeSupport?: shared.ApplianceModeSupportValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=DnsSupport" })
  dnsSupport?: shared.DnsSupportValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=Ipv6Support" })
  ipv6Support?: shared.Ipv6SupportValueEnum;
}

export enum GetModifyTransitGatewayVpcAttachmentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTransitGatewayVpcAttachmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTransitGatewayVpcAttachmentActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddSubnetIds" })
  addSubnetIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Options" })
  options?: GetModifyTransitGatewayVpcAttachmentOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveSubnetIds" })
  removeSubnetIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" })
  transitGatewayAttachmentId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTransitGatewayVpcAttachmentVersionEnum;
}


export class GetModifyTransitGatewayVpcAttachmentHeaders extends SpeakeasyBase {
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


export class GetModifyTransitGatewayVpcAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyTransitGatewayVpcAttachmentQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyTransitGatewayVpcAttachmentHeaders;
}


export class GetModifyTransitGatewayVpcAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
