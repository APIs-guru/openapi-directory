import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { Address } from "./address";
import { GenderEnum } from "./genderenum";
import { Address } from "./address";
import { PartyTypeEnum } from "./partytypeenum";
import { Address } from "./address";


// Profile
/** 
 * The standard profile of a customer.
**/
export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=Address" })
  address?: Address;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=BillingAddress" })
  billingAddress?: Address;

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
  gender?: GenderEnum;

  @Metadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MailingAddress" })
  mailingAddress?: Address;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @Metadata({ data: "json, name=PartyType" })
  partyType?: PartyTypeEnum;

  @Metadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=ProfileId" })
  profileId?: string;

  @Metadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: Address;
}
