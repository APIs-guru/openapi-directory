import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


export class CreateWebhookOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook?: Webhook;
}
