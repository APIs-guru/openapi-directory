import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
