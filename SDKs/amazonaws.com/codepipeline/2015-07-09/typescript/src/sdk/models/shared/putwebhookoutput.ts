import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListWebhookItem } from "./listwebhookitem";



export class PutWebhookOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: ListWebhookItem;
}
