import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortRange } from "./portrange";


export class UpdateCustomRoutingListenerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn: string;

  @Metadata({ data: "json, name=PortRanges", elemType: shared.PortRange })
  portRanges: PortRange[];
}
