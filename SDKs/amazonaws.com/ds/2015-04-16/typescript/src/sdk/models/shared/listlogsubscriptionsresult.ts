import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogSubscription } from "./logsubscription";


export class ListLogSubscriptionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogSubscriptions", elemType: shared.LogSubscription })
  logSubscriptions?: LogSubscription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
