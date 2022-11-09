import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProactiveInsight } from "./proactiveinsight";
import { ReactiveInsight } from "./reactiveinsight";
export declare class DescribeInsightResponse extends SpeakeasyBase {
    proactiveInsight?: ProactiveInsight;
    reactiveInsight?: ReactiveInsight;
}
