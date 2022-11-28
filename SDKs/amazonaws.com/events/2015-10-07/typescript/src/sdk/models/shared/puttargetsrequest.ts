import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



export class PutTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventBusName" })
  eventBusName?: string;

  @SpeakeasyMetadata({ data: "json, name=Rule" })
  rule: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets: Target[];
}
