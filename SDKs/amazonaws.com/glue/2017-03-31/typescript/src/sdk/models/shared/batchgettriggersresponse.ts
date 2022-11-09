import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trigger } from "./trigger";


export class BatchGetTriggersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Triggers", elemType: shared.Trigger })
  triggers?: Trigger[];

  @Metadata({ data: "json, name=TriggersNotFound" })
  triggersNotFound?: string[];
}
