import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionHistory } from "./actionhistory";


export class DescribeBudgetActionHistoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionHistories", elemType: shared.ActionHistory })
  actionHistories: ActionHistory[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
