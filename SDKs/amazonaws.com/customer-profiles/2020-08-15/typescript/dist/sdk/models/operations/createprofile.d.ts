import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProfilePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export declare class CreateProfileRequestBodyAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export declare class CreateProfileRequestBodyBillingAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
export declare enum CreateProfileRequestBodyGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unspecified = "UNSPECIFIED"
}
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export declare class CreateProfileRequestBodyMailingAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
export declare enum CreateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL",
    Business = "BUSINESS",
    Other = "OTHER"
}
/**
 * A generic address associated with the customer that is not mailing, shipping, or billing.
**/
export declare class CreateProfileRequestBodyShippingAddress extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    country?: string;
    county?: string;
    postalCode?: string;
    province?: string;
    state?: string;
}
export declare class CreateProfileRequestBody extends SpeakeasyBase {
    accountNumber?: string;
    additionalInformation?: string;
    address?: CreateProfileRequestBodyAddress;
    attributes?: Map<string, string>;
    billingAddress?: CreateProfileRequestBodyBillingAddress;
    birthDate?: string;
    businessEmailAddress?: string;
    businessName?: string;
    businessPhoneNumber?: string;
    emailAddress?: string;
    firstName?: string;
    gender?: CreateProfileRequestBodyGenderEnum;
    homePhoneNumber?: string;
    lastName?: string;
    mailingAddress?: CreateProfileRequestBodyMailingAddress;
    middleName?: string;
    mobilePhoneNumber?: string;
    partyType?: CreateProfileRequestBodyPartyTypeEnum;
    personalEmailAddress?: string;
    phoneNumber?: string;
    shippingAddress?: CreateProfileRequestBodyShippingAddress;
}
export declare class CreateProfileRequest extends SpeakeasyBase {
    pathParams: CreateProfilePathParams;
    headers: CreateProfileHeaders;
    request: CreateProfileRequestBody;
}
export declare class CreateProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    createProfileResponse?: shared.CreateProfileResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
