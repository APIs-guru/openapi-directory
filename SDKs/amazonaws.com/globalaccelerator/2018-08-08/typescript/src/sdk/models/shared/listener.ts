import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientAffinityEnum } from "./clientaffinityenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";



// Listener
/** 
 * A complex type for a listener.
**/
export class Listener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientAffinity" })
  clientAffinity?: ClientAffinityEnum;

  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PortRanges", elemType: PortRange })
  portRanges?: PortRange[];

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: ProtocolEnum;
}
