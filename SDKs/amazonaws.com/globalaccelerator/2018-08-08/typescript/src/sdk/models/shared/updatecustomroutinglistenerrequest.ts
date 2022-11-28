import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";



export class UpdateCustomRoutingListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListenerArn" })
  listenerArn: string;

  @SpeakeasyMetadata({ data: "json, name=PortRanges", elemType: PortRange })
  portRanges: PortRange[];
}
