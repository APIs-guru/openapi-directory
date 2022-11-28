import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceEndpoint
/** 
 * The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>.
**/
export class ServiceEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  endpoint?: string;
}
