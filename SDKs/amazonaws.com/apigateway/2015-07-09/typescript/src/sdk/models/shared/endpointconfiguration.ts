import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";


// EndpointConfiguration
/** 
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
**/
export class EndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=types" })
  types?: EndpointTypeEnum[];

  @Metadata({ data: "json, name=vpcEndpointIds" })
  vpcEndpointIds?: string[];
}
