import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";



export class OpenTunnelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;
}
