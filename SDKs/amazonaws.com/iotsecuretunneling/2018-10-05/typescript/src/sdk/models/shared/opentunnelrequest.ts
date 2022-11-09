import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationConfig } from "./destinationconfig";
import { Tag } from "./tag";
import { TimeoutConfig } from "./timeoutconfig";


export class OpenTunnelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationConfig" })
  destinationConfig?: DestinationConfig;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: TimeoutConfig;
}
