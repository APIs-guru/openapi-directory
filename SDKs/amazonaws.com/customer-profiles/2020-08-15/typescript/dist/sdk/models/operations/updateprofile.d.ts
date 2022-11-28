import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfilePathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class UpdateProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Updates associated with the address properties of a customer profile.
**/
export declare class UpdateProfileRequestBodyAddress extends SpeakeasyBase {
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
 * Updates associated with the address properties of a customer profile.
**/
export declare class UpdateProfileRequestBodyBillingAddress extends SpeakeasyBase {
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
export declare enum UpdateProfileRequestBodyGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unspecified = "UNSPECIFIED"
}
/**
 * Updates associated with the address properties of a customer profile.
**/
export declare class UpdateProfileRequestBodyMailingAddress extends SpeakeasyBase {
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
export declare enum UpdateProfileRequestBodyPartyTypeEnum {
    Individual = "INDIVIDUAL",
    Business = "BUSINESS",
    Other = "OTHER"
}
/**
 * Updates associated with the address properties of a customer profile.
**/
export declare class UpdateProfileRequestBodyShippingAddress extends SpeakeasyBase {
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
export declare class UpdateProfileRequestBody extends SpeakeasyBase {
    accountNumber?: string;
    additionalInformation?: string;
    address?: UpdateProfileRequestBodyAddress;
    attributes?: Map<string, string>;
    billingAddress?: UpdateProfileRequestBodyBillingAddress;
    birthDate?: string;
    businessEmailAddress?: string;
    businessName?: string;
    businessPhoneNumber?: string;
    emailAddress?: string;
    firstName?: string;
    gender?: UpdateProfileRequestBodyGenderEnum;
    homePhoneNumber?: string;
    lastName?: string;
    mailingAddress?: UpdateProfileRequestBodyMailingAddress;
    middleName?: string;
    mobilePhoneNumber?: string;
    partyType?: UpdateProfileRequestBodyPartyTypeEnum;
    personalEmailAddress?: string;
    phoneNumber?: string;
    profileId: string;
    shippingAddress?: UpdateProfileRequestBodyShippingAddress;
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    pathParams: UpdateProfilePathParams;
    headers: UpdateProfileHeaders;
    request: UpdateProfileRequestBody;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateProfileResponse?: shared.UpdateProfileResponse;
}
