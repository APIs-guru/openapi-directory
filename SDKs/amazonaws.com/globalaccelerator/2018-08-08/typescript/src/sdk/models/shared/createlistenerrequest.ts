import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientAffinityEnum } from "./clientaffinityenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";



export class CreateListenerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;

  @SpeakeasyMetadata({ data: "json, name=ClientAffinity" })
  clientAffinity?: ClientAffinityEnum;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=PortRanges", elemType: PortRange })
  portRanges: PortRange[];

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol: ProtocolEnum;
}
