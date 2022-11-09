import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListWebhookItem } from "./listwebhookitem";


export class PutWebhookOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook?: ListWebhookItem;
}
