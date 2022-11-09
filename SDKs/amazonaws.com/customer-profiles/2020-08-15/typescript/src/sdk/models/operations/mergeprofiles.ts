import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MergeProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainName" })
  domainName: string;
}


export class MergeProfilesHeaders extends SpeakeasyBase {
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


// MergeProfilesRequestBodyFieldSourceProfileIds
/** 
 * A duplicate customer profile that is to be merged into a main profile. 
**/
export class MergeProfilesRequestBodyFieldSourceProfileIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=AdditionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=BillingAddress" })
  billingAddress?: string;

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
  gender?: string;

  @Metadata({ data: "json, name=HomePhoneNumber" })
  homePhoneNumber?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=MailingAddress" })
  mailingAddress?: string;

  @Metadata({ data: "json, name=MiddleName" })
  middleName?: string;

  @Metadata({ data: "json, name=MobilePhoneNumber" })
  mobilePhoneNumber?: string;

  @Metadata({ data: "json, name=PartyType" })
  partyType?: string;

  @Metadata({ data: "json, name=PersonalEmailAddress" })
  personalEmailAddress?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=ShippingAddress" })
  shippingAddress?: string;
}


export class MergeProfilesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FieldSourceProfileIds" })
  fieldSourceProfileIds?: MergeProfilesRequestBodyFieldSourceProfileIds;

  @Metadata({ data: "json, name=MainProfileId" })
  mainProfileId: string;

  @Metadata({ data: "json, name=ProfileIdsToBeMerged" })
  profileIdsToBeMerged: string[];
}


export class MergeProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MergeProfilesPathParams;

  @Metadata()
  headers: MergeProfilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: MergeProfilesRequestBody;
}


export class MergeProfilesResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  mergeProfilesResponse?: shared.MergeProfilesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
