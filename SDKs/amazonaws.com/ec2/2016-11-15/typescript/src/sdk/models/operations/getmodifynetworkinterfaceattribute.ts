import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyNetworkInterfaceAttributeActionEnum {
    ModifyNetworkInterfaceAttribute = "ModifyNetworkInterfaceAttribute"
}


// GetModifyNetworkInterfaceAttributeAttachment
/** 
 * Describes an attachment change.
**/
export class GetModifyNetworkInterfaceAttributeAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=AttachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;
}


// GetModifyNetworkInterfaceAttributeDescription
/** 
 * Describes a value for a resource attribute that is a String.
**/
export class GetModifyNetworkInterfaceAttributeDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: string;
}


// GetModifyNetworkInterfaceAttributeSourceDestCheck
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyNetworkInterfaceAttributeSourceDestCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifyNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyNetworkInterfaceAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attachment" })
  attachment?: GetModifyNetworkInterfaceAttributeAttachment;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: GetModifyNetworkInterfaceAttributeDescription;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" })
  securityGroupId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceDestCheck" })
  sourceDestCheck?: GetModifyNetworkInterfaceAttributeSourceDestCheck;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyNetworkInterfaceAttributeVersionEnum;
}


export class GetModifyNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyNetworkInterfaceAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyNetworkInterfaceAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyNetworkInterfaceAttributeHeaders;
}


export class GetModifyNetworkInterfaceAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
