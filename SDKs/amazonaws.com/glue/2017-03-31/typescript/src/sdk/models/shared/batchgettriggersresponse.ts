import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";



export class BatchGetTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Triggers", elemType: Trigger })
  triggers?: Trigger[];

  @SpeakeasyMetadata({ data: "json, name=TriggersNotFound" })
  triggersNotFound?: string[];
}
