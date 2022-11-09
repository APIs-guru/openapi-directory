import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProactiveAnomaly } from "./proactiveanomaly";
import { ReactiveAnomaly } from "./reactiveanomaly";


export class DescribeAnomalyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProactiveAnomaly" })
  proactiveAnomaly?: ProactiveAnomaly;

  @Metadata({ data: "json, name=ReactiveAnomaly" })
  reactiveAnomaly?: ReactiveAnomaly;
}
