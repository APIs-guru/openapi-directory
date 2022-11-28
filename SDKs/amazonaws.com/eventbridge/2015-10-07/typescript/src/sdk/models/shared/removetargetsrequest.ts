import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "json, name=Rule" })
  rule: string;
}
