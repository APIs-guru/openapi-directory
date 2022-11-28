import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingProtocolEnum } from "./customroutingprotocolenum";



// CustomRoutingDestinationConfiguration
/** 
 * For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
export class CustomRoutingDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromPort" })
  fromPort: number;

  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols: CustomRoutingProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=ToPort" })
  toPort: number;
}
