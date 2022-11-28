import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";



export class DescribeBudgetActionsForAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: Action })
  actions: Action[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
