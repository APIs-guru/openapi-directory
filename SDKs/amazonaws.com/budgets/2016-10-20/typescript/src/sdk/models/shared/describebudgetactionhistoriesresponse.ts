import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionHistory } from "./actionhistory";



export class DescribeBudgetActionHistoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionHistories", elemType: ActionHistory })
  actionHistories: ActionHistory[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
