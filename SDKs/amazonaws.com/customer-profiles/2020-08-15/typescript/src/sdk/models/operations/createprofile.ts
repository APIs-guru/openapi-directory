import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class CreateProfileHeaders extends SpeakeasyBase {
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


// CreateProfileRequestBodyAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyAddress extends SpeakeasyBase {
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


// CreateProfileRequestBodyBillingAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyBillingAddress extends SpeakeasyBase {
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

export enum CreateProfileRequestBodyGenderEnum {
    Male = "MALE"
,    Female = "FEMALE"
,    Unspecified = "UNSPECIFIED"
}


// CreateProfileRequestBodyMailingAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyMailingAddress extends SpeakeasyBase {
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

export enum CreateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL"
,    Business = "BUSINESS"
,    Other = "OTHER"
}


// CreateProfileRequestBodyShippingAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyShippingAddress extends SpeakeasyBase {
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


export class CreateProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=Address" })
  address?: CreateProfileRequestBodyAddress;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=BillingAddress" })
  billingAddress?: CreateProfileRequestBodyBillingAddress;

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
  gender?: CreateProfileRequestBodyGenderEnum;

  @Metadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MailingAddress" })
  mailingAddress?: CreateProfileRequestBodyMailingAddress;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @Metadata({ data: "json, name=PartyType" })
  partyType?: CreateProfileRequestBodyPartyTypeEnum;

  @Metadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: CreateProfileRequestBodyShippingAddress;
}


export class CreateProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProfilePathParams;

  @Metadata()
  headers: CreateProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProfileRequestBody;
}


export class CreateProfileResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createProfileResponse?: shared.CreateProfileResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
