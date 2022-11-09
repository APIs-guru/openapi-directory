import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortProtocolEnum } from "./portprotocolenum";


// PortMapping
/** 
 * An object that represents a port mapping.
**/
export class PortMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PortProtocolEnum;
}
