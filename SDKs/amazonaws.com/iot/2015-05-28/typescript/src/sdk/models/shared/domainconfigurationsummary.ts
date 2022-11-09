import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTypeEnum } from "./servicetypeenum";


// DomainConfigurationSummary
/** 
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul>
**/
export class DomainConfigurationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainConfigurationArn" })
  domainConfigurationArn?: string;

  @Metadata({ data: "json, name=domainConfigurationName" })
  domainConfigurationName?: string;

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: ServiceTypeEnum;
}
