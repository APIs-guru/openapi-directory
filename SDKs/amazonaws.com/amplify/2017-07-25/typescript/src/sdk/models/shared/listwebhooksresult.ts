import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webhook } from "./webhook";


// ListWebhooksResult
/** 
 *  The result structure for the list webhooks request. 
**/
export class ListWebhooksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=webhooks", elemType: shared.Webhook })
  webhooks: Webhook[];
}
