import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionSummary } from "./actionsummary";



export class ListActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ActionSummary })
  actions?: ActionSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
