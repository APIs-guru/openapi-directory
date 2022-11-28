import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { GenderEnum } from "./genderenum";
import { PartyTypeEnum } from "./partytypeenum";
/**
 * The standard profile of a customer.
**/
export declare class Profile extends SpeakeasyBase {
    accountNumber?: string;
    additionalInformation?: string;
    address?: Address;
    attributes?: Map<string, string>;
    billingAddress?: Address;
    birthDate?: string;
    businessEmailAddress?: string;
    businessName?: string;
    businessPhoneNumber?: string;
    emailAddress?: string;
    firstName?: string;
    gender?: GenderEnum;
    homePhoneNumber?: string;
    lastName?: string;
    mailingAddress?: Address;
    middleName?: string;
    mobilePhoneNumber?: string;
    partyType?: PartyTypeEnum;
    personalEmailAddress?: string;
    phoneNumber?: string;
    profileId?: string;
    shippingAddress?: Address;
}
