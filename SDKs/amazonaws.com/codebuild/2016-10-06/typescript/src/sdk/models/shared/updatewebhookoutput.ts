import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


export class UpdateWebhookOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook?: Webhook;
}
