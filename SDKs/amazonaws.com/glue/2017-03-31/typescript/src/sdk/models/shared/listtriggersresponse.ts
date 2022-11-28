import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TriggerNames" })
  triggerNames?: string[];
}
