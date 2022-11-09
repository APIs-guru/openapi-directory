import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MutualTlsAuthentication
/** 
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
**/
export class MutualTlsAuthentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=truststoreUri" })
  truststoreUri?: string;

  @Metadata({ data: "json, name=truststoreVersion" })
  truststoreVersion?: string;

  @Metadata({ data: "json, name=truststoreWarnings" })
  truststoreWarnings?: string[];
}
