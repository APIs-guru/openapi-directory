import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { WebhookDefinition } from "./webhookdefinition";


export class PutWebhookInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=webhook" })
  webhook: WebhookDefinition;
}
