import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectedMetric } from "./projectedmetric";


// RecommendedOptionProjectedMetric
/** 
 * <p>Describes a projected utilization metric of a recommendation option.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
**/
export class RecommendedOptionProjectedMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectedMetrics", elemType: shared.ProjectedMetric })
  projectedMetrics?: ProjectedMetric[];

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=recommendedInstanceType" })
  recommendedInstanceType?: string;
}
