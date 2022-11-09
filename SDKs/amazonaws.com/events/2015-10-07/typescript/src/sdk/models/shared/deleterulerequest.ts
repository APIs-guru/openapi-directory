import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Force" })
  force?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
