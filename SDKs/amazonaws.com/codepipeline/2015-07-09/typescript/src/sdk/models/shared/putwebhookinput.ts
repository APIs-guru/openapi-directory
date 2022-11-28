import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { WebhookDefinition } from "./webhookdefinition";



export class PutWebhookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: WebhookDefinition;
}
