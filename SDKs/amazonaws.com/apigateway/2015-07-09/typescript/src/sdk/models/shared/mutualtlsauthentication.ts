import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MutualTlsAuthentication
/** 
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
export class MutualTlsAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=truststoreUri" })
  truststoreUri?: string;

  @SpeakeasyMetadata({ data: "json, name=truststoreVersion" })
  truststoreVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=truststoreWarnings" })
  truststoreWarnings?: string[];
}
