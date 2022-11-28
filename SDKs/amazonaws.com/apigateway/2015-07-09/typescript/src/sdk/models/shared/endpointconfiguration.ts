import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";



// EndpointConfiguration
/** 
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
**/
export class EndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: EndpointTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=vpcEndpointIds" })
  vpcEndpointIds?: string[];
}
