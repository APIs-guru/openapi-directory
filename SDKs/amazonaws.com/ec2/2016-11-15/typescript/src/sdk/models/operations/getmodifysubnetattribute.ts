import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifySubnetAttributeActionEnum {
    ModifySubnetAttribute = "ModifySubnetAttribute"
}


// GetModifySubnetAttributeAssignIpv6AddressOnCreation
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifySubnetAttributeAssignIpv6AddressOnCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}


// GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}


// GetModifySubnetAttributeMapPublicIpOnLaunch
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifySubnetAttributeMapPublicIpOnLaunch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifySubnetAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifySubnetAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifySubnetAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssignIpv6AddressOnCreation" })
  assignIpv6AddressOnCreation?: GetModifySubnetAttributeAssignIpv6AddressOnCreation;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CustomerOwnedIpv4Pool" })
  customerOwnedIpv4Pool?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MapCustomerOwnedIpOnLaunch" })
  mapCustomerOwnedIpOnLaunch?: GetModifySubnetAttributeMapCustomerOwnedIpOnLaunch;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MapPublicIpOnLaunch" })
  mapPublicIpOnLaunch?: GetModifySubnetAttributeMapPublicIpOnLaunch;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SubnetId" })
  subnetId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifySubnetAttributeVersionEnum;
}


export class GetModifySubnetAttributeHeaders extends SpeakeasyBase {
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


export class GetModifySubnetAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifySubnetAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifySubnetAttributeHeaders;
}


export class GetModifySubnetAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
