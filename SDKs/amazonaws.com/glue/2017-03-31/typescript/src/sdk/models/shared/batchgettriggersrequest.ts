import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchGetTriggersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TriggerNames" })
  triggerNames: string[];
}
