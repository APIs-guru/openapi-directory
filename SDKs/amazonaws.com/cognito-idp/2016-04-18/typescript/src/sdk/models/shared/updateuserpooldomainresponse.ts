import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateUserPoolDomainResponse
/** 
 * The UpdateUserPoolDomain response output.
**/
export class UpdateUserPoolDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFrontDomain" })
  cloudFrontDomain?: string;
}
