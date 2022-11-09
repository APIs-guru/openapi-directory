import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTargetsByRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Rule" })
  rule: string;
}
