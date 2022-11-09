import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProactiveInsight } from "./proactiveinsight";
import { ReactiveInsight } from "./reactiveinsight";


export class DescribeInsightResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProactiveInsight" })
  proactiveInsight?: ProactiveInsight;

  @Metadata({ data: "json, name=ReactiveInsight" })
  reactiveInsight?: ReactiveInsight;
}
