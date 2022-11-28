import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVpcAttributeActionEnum {
    ModifyVpcAttribute = "ModifyVpcAttribute"
}


// GetModifyVpcAttributeEnableDnsHostnames
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyVpcAttributeEnableDnsHostnames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}


// GetModifyVpcAttributeEnableDnsSupport
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyVpcAttributeEnableDnsSupport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifyVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableDnsHostnames" })
  enableDnsHostnames?: GetModifyVpcAttributeEnableDnsHostnames;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnableDnsSupport" })
  enableDnsSupport?: GetModifyVpcAttributeEnableDnsSupport;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcAttributeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetModifyVpcAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyVpcAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVpcAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVpcAttributeHeaders;
}


export class GetModifyVpcAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
