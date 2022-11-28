import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";



export class GetTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Triggers", elemType: Trigger })
  triggers?: Trigger[];
}
