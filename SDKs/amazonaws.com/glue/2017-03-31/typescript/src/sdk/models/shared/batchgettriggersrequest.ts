import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetTriggersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TriggerNames" })
  triggerNames: string[];
}
