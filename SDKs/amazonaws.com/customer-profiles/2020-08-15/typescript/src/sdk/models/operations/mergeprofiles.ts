import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MergeProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class MergeProfilesHeaders extends SpeakeasyBase {
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


// MergeProfilesRequestBodyFieldSourceProfileIds
/** 
 * A duplicate customer profile that is to be merged into a main profile. 
**/
export class MergeProfilesRequestBodyFieldSourceProfileIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=BillingAddress" })
  billingAddress?: string;

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
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=MailingAddress" })
  mailingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=PartyType" })
  partyType?: string;

  @SpeakeasyMetadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: string;
}


export class MergeProfilesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FieldSourceProfileIds" })
  fieldSourceProfileIds?: MergeProfilesRequestBodyFieldSourceProfileIds;

  @SpeakeasyMetadata({ data: "json, name=MainProfileId" })
  mainProfileId: string;

  @SpeakeasyMetadata({ data: "json, name=ProfileIdsToBeMerged" })
  profileIdsToBeMerged: string[];
}


export class MergeProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MergeProfilesPathParams;

  @SpeakeasyMetadata()
  headers: MergeProfilesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: MergeProfilesRequestBody;
}


export class MergeProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  mergeProfilesResponse?: shared.MergeProfilesResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
