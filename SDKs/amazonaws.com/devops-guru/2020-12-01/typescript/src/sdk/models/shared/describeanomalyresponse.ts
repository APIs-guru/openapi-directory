import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProactiveAnomaly } from "./proactiveanomaly";
import { ReactiveAnomaly } from "./reactiveanomaly";



export class DescribeAnomalyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProactiveAnomaly" })
  proactiveAnomaly?: ProactiveAnomaly;

  @SpeakeasyMetadata({ data: "json, name=ReactiveAnomaly" })
  reactiveAnomaly?: ReactiveAnomaly;
}
