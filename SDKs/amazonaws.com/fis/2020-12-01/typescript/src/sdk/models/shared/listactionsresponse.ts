import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionSummary } from "./actionsummary";


export class ListActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.ActionSummary })
  actions?: ActionSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
