import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
