import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTargetsByRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Rule" })
  rule: string;
}
