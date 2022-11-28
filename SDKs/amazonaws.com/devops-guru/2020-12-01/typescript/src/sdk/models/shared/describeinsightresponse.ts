import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProactiveInsight } from "./proactiveinsight";
import { ReactiveInsight } from "./reactiveinsight";



export class DescribeInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProactiveInsight" })
  proactiveInsight?: ProactiveInsight;

  @SpeakeasyMetadata({ data: "json, name=ReactiveInsight" })
  reactiveInsight?: ReactiveInsight;
}
