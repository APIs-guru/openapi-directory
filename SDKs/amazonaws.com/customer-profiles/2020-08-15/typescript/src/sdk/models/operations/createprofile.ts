import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class CreateProfileHeaders extends SpeakeasyBase {
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


// CreateProfileRequestBodyAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyAddress extends SpeakeasyBase {
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


// CreateProfileRequestBodyBillingAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyBillingAddress extends SpeakeasyBase {
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

export enum CreateProfileRequestBodyGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unspecified = "UNSPECIFIED"
}


// CreateProfileRequestBodyMailingAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyMailingAddress extends SpeakeasyBase {
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

export enum CreateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL",
    Business = "BUSINESS",
    Other = "OTHER"
}


// CreateProfileRequestBodyShippingAddress
/** 
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export class CreateProfileRequestBodyShippingAddress extends SpeakeasyBase {
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


export class CreateProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: CreateProfileRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress" })
  billingAddress?: CreateProfileRequestBodyBillingAddress;

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
  gender?: CreateProfileRequestBodyGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MailingAddress" })
  mailingAddress?: CreateProfileRequestBodyMailingAddress;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyType" })
  partyType?: CreateProfileRequestBodyPartyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: CreateProfileRequestBodyShippingAddress;
}


export class CreateProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProfilePathParams;

  @SpeakeasyMetadata()
  headers: CreateProfileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProfileRequestBody;
}


export class CreateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createProfileResponse?: shared.CreateProfileResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
