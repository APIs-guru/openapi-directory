import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



export class UpdateWebhookOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: Webhook;
}
