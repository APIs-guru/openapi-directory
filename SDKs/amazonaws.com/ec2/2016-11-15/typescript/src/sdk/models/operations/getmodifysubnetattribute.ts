import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifySubnetAttributeActionEnum {
    ModifySubnetAttribute = "ModifySubnetAttribute"
}


// GetModifySubnetAttributeAssignIpv6AddressOnCreation
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifySubnetAttributeAssignIpv6AddressOnCreation extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}


// GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}


// GetModifySubnetAttributeMapPublicIpOnLaunch
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifySubnetAttributeMapPublicIpOnLaunch extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifySubnetAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifySubnetAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifySubnetAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssignIpv6AddressOnCreation" })
  assignIpv6AddressOnCreation?: GetModifySubnetAttributeAssignIpv6AddressOnCreation;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CustomerOwnedIpv4Pool" })
  customerOwnedIpv4Pool?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MapCustomerOwnedIpOnLaunch" })
  mapCustomerOwnedIpOnLaunch?: GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MapPublicIpOnLaunch" })
  mapPublicIpOnLaunch?: GetModifySubnetAttributeMapPublicIpOnLaunch;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SubnetId" })
  subnetId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifySubnetAttributeVersionEnum;
}


export class GetModifySubnetAttributeHeaders extends SpeakeasyBase {
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


export class GetModifySubnetAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifySubnetAttributeQueryParams;

  @Metadata()
  headers: GetModifySubnetAttributeHeaders;
}


export class GetModifySubnetAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
