import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TriggerNames" })
  triggerNames?: string[];
}
