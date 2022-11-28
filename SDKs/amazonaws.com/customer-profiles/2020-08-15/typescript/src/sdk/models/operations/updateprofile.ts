import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class UpdateProfileHeaders extends SpeakeasyBase {
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


// UpdateProfileRequestBodyAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Province" })
  province?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}


// UpdateProfileRequestBodyBillingAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyBillingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Province" })
  province?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}

export enum UpdateProfileRequestBodyGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unspecified = "UNSPECIFIED"
}


// UpdateProfileRequestBodyMailingAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyMailingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Province" })
  province?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}

export enum UpdateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL",
    Business = "BUSINESS",
    Other = "OTHER"
}


// UpdateProfileRequestBodyShippingAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyShippingAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=Address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=Address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=Address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=County" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Province" })
  province?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}


export class UpdateProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: UpdateProfileRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress" })
  billingAddress?: UpdateProfileRequestBodyBillingAddress;

  @SpeakeasyMetadata({ data: "json, name=BirthDate" })
  birthDate?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessEmailAddress" })
  businessEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=BusinessPhoneNumber" })
  businessPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=Gender" })
  gender?: UpdateProfileRequestBodyGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MailingAddress" })
  mailingAddress?: UpdateProfileRequestBodyMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyType" })
  partyType?: UpdateProfileRequestBodyPartyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileId" })
  profileId: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: UpdateProfileRequestBodyShippingAddress;
}


export class UpdateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProfilePathParams;

  @SpeakeasyMetadata()
  headers: UpdateProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProfileRequestBody;
}


export class UpdateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateProfileResponse?: shared.UpdateProfileResponse;
}
