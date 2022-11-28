import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { GenderEnum } from "./genderenum";
import { PartyTypeEnum } from "./partytypeenum";



// Profile
/** 
 * The standard profile of a customer.
**/
export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress" })
  billingAddress?: Address;

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
  gender?: GenderEnum;

  @SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MailingAddress" })
  mailingAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyType" })
  partyType?: PartyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: Address;
}
