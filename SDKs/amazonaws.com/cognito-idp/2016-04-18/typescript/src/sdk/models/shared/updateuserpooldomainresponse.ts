import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateUserPoolDomainResponse
/** 
 * The UpdateUserPoolDomain response output.
**/
export class UpdateUserPoolDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFrontDomain" })
  cloudFrontDomain?: string;
}
