import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientAffinityEnum } from "./clientaffinityenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";


export class UpdateListenerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientAffinity" })
  clientAffinity?: ClientAffinityEnum;

  @Metadata({ data: "json, name=ListenerArn" })
  listenerArn: string;

  @Metadata({ data: "json, name=PortRanges", elemType: shared.PortRange })
  portRanges?: PortRange[];

  @Metadata({ data: "json, name=Protocol" })
  protocol?: ProtocolEnum;
}
