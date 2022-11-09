import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class UpdateProfileHeaders extends SpeakeasyBase {
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


// UpdateProfileRequestBodyAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Province" })
  province?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}


// UpdateProfileRequestBodyBillingAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyBillingAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Province" })
  province?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}

export enum UpdateProfileRequestBodyGenderEnum {
    Male = "MALE"
,    Female = "FEMALE"
,    Unspecified = "UNSPECIFIED"
}


// UpdateProfileRequestBodyMailingAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyMailingAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Province" })
  province?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}

export enum UpdateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL"
,    Business = "BUSINESS"
,    Other = "OTHER"
}


// UpdateProfileRequestBodyShippingAddress
/** 
 * Updates associated with the address properties of a customer profile.
**/
export class UpdateProfileRequestBodyShippingAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address1" })
  address1?: string;

  @Metadata({ data: "json, name=Address2" })
  address2?: string;

  @Metadata({ data: "json, name=Address3" })
  address3?: string;

  @Metadata({ data: "json, name=Address4" })
  address4?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=County" })
  county?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Province" })
  province?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}


export class UpdateProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=Address" })
  address?: UpdateProfileRequestBodyAddress;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=BillingAddress" })
  billingAddress?: UpdateProfileRequestBodyBillingAddress;

  @Metadata({ data: "json, name=BirthDate" })
  birthDate?: string;

  @Metadata({ data: "json, name=BusinessEmailAddress" })
  businessEmailAddress?: string;

  @Metadata({ data: "json, name=BusinessName" })
  businessName?: string;

  @Metadata({ data: "json, name=BusinessPhoneNumber" })
  businessPhoneNumber?: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=Gender" })
  gender?: UpdateProfileRequestBodyGenderEnum;

  @Metadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MailingAddress" })
  mailingAddress?: UpdateProfileRequestBodyMailingAddress;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @Metadata({ data: "json, name=PartyType" })
  partyType?: UpdateProfileRequestBodyPartyTypeEnum;

  @Metadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=ProfileId" })
  profileId: string;

  @Metadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: UpdateProfileRequestBodyShippingAddress;
}


export class UpdateProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProfilePathParams;

  @Metadata()
  headers: UpdateProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProfileRequestBody;
}


export class UpdateProfileResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateProfileResponse?: shared.UpdateProfileResponse;
}
