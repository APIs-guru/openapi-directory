import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtocolEnum } from "./protocolenum";


// CustomRoutingDestinationDescription
/** 
 * For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
export class CustomRoutingDestinationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @Metadata({ data: "json, name=ToPort" })
  toPort?: number;
}
