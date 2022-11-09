import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlatformDifferenceEnum } from "./platformdifferenceenum";
import { UtilizationMetric } from "./utilizationmetric";


// InstanceRecommendationOption
/** 
 * Describes a recommendation option for an Amazon EC2 instance.
**/
export class InstanceRecommendationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=performanceRisk" })
  performanceRisk?: number;

  @Metadata({ data: "json, name=platformDifferences" })
  platformDifferences?: PlatformDifferenceEnum[];

  @Metadata({ data: "json, name=projectedUtilizationMetrics", elemType: shared.UtilizationMetric })
  projectedUtilizationMetrics?: UtilizationMetric[];

  @Metadata({ data: "json, name=rank" })
  rank?: number;
}
