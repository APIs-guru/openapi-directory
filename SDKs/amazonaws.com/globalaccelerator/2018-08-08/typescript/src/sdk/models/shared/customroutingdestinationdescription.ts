import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtocolEnum } from "./protocolenum";



// CustomRoutingDestinationDescription
/** 
 * For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
**/
export class CustomRoutingDestinationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=ToPort" })
  toPort?: number;
}
