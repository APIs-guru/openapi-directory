import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MergeProfilesPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class MergeProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A duplicate customer profile that is to be merged into a main profile.
**/
export declare class MergeProfilesRequestBodyFieldSourceProfileIds extends SpeakeasyBase {
    accountNumber?: string;
    additionalInformation?: string;
    address?: string;
    attributes?: Map<string, string>;
    billingAddress?: string;
    birthDate?: string;
    businessEmailAddress?: string;
    businessName?: string;
    businessPhoneNumber?: string;
    emailAddress?: string;
    firstName?: string;
    gender?: string;
    homePhoneNumber?: string;
    lastName?: string;
    mailingAddress?: string;
    middleName?: string;
    mobilePhoneNumber?: string;
    partyType?: string;
    personalEmailAddress?: string;
    phoneNumber?: string;
    shippingAddress?: string;
}
export declare class MergeProfilesRequestBody extends SpeakeasyBase {
    fieldSourceProfileIds?: MergeProfilesRequestBodyFieldSourceProfileIds;
    mainProfileId: string;
    profileIdsToBeMerged: string[];
}
export declare class MergeProfilesRequest extends SpeakeasyBase {
    pathParams: MergeProfilesPathParams;
    headers: MergeProfilesHeaders;
    request: MergeProfilesRequestBody;
}
export declare class MergeProfilesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    mergeProfilesResponse?: shared.MergeProfilesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
