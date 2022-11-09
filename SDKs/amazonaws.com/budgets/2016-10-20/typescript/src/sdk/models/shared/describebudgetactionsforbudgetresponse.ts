import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";


export class DescribeBudgetActionsForBudgetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions", elemType: shared.Action })
  actions: Action[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
