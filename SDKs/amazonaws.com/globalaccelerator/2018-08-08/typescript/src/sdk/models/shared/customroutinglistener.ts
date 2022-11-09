import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortRange } from "./portrange";


// CustomRoutingListener
/** 
 * A complex type for a listener for a custom routing accelerator.
**/
export class CustomRoutingListener extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn?: string;

  @Metadata({ data: "json, name=PortRanges", elemType: shared.PortRange })
  portRanges?: PortRange[];
}
