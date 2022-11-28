import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListWebhookItem } from "./listwebhookitem";



export class ListWebhooksOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: ListWebhookItem })
  webhooks?: ListWebhookItem[];
}
