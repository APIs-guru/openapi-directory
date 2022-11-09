import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVpcAttributeActionEnum {
    ModifyVpcAttribute = "ModifyVpcAttribute"
}


// GetModifyVpcAttributeEnableDnsHostnames
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyVpcAttributeEnableDnsHostnames extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}


// GetModifyVpcAttributeEnableDnsSupport
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyVpcAttributeEnableDnsSupport extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifyVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableDnsHostnames" })
  enableDnsHostnames?: GetModifyVpcAttributeEnableDnsHostnames;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnableDnsSupport" })
  enableDnsSupport?: GetModifyVpcAttributeEnableDnsSupport;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcAttributeVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetModifyVpcAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyVpcAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpcAttributeQueryParams;

  @Metadata()
  headers: GetModifyVpcAttributeHeaders;
}


export class GetModifyVpcAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
