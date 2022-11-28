import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogSubscription } from "./logsubscription";



export class ListLogSubscriptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogSubscriptions", elemType: LogSubscription })
  logSubscriptions?: LogSubscription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
