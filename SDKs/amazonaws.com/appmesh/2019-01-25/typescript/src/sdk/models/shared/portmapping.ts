import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortProtocolEnum } from "./portprotocolenum";



// PortMapping
/** 
 * An object that represents a port mapping.
**/
export class PortMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PortProtocolEnum;
}
