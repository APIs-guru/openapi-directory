import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomRoutingProtocolEnum } from "./customroutingprotocolenum";


// CustomRoutingDestinationConfiguration
/** 
 * For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
export class CustomRoutingDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromPort" })
  fromPort: number;

  @Metadata({ data: "json, name=Protocols" })
  protocols: CustomRoutingProtocolEnum[];

  @Metadata({ data: "json, name=ToPort" })
  toPort: number;
}
