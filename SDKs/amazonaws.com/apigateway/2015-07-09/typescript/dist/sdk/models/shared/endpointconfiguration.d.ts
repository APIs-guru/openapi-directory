import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointTypeEnum } from "./endpointtypeenum";
/**
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
**/
export declare class EndpointConfiguration extends SpeakeasyBase {
    types?: EndpointTypeEnum[];
    vpcEndpointIds?: string[];
}
