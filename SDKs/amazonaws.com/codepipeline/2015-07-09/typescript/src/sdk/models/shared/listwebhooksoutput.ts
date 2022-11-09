import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListWebhookItem } from "./listwebhookitem";


export class ListWebhooksOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=webhooks", elemType: shared.ListWebhookItem })
  webhooks?: ListWebhookItem[];
}
