import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveTargetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @Metadata({ data: "json, name=Force" })
  force?: boolean;

  @Metadata({ data: "json, name=Ids" })
  ids: string[];

  @Metadata({ data: "json, name=Rule" })
  rule: string;
}
