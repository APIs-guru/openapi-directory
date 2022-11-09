import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyNetworkInterfaceAttributeActionEnum {
    ModifyNetworkInterfaceAttribute = "ModifyNetworkInterfaceAttribute"
}


// GetModifyNetworkInterfaceAttributeAttachment
/** 
 * Describes an attachment change.
**/
export class GetModifyNetworkInterfaceAttributeAttachment extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=AttachmentId" })
  attachmentId?: string;

  @Metadata({ data: "queryParam, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;
}


// GetModifyNetworkInterfaceAttributeDescription
/** 
 * Describes a value for a resource attribute that is a String.
**/
export class GetModifyNetworkInterfaceAttributeDescription extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: string;
}


// GetModifyNetworkInterfaceAttributeSourceDestCheck
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyNetworkInterfaceAttributeSourceDestCheck extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifyNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyNetworkInterfaceAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attachment" })
  attachment?: GetModifyNetworkInterfaceAttributeAttachment;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: GetModifyNetworkInterfaceAttributeDescription;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" })
  securityGroupId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceDestCheck" })
  sourceDestCheck?: GetModifyNetworkInterfaceAttributeSourceDestCheck;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyNetworkInterfaceAttributeVersionEnum;
}


export class GetModifyNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyNetworkInterfaceAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyNetworkInterfaceAttributeQueryParams;

  @Metadata()
  headers: GetModifyNetworkInterfaceAttributeHeaders;
}


export class GetModifyNetworkInterfaceAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
