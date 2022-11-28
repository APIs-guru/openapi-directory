import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformDifferenceEnum } from "./platformdifferenceenum";
import { UtilizationMetric } from "./utilizationmetric";



// InstanceRecommendationOption
/** 
 * Describes a recommendation option for an Amazon EC2 instance.
**/
export class InstanceRecommendationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=performanceRisk" })
  performanceRisk?: number;

  @SpeakeasyMetadata({ data: "json, name=platformDifferences" })
  platformDifferences?: PlatformDifferenceEnum[];

  @SpeakeasyMetadata({ data: "json, name=projectedUtilizationMetrics", elemType: UtilizationMetric })
  projectedUtilizationMetrics?: UtilizationMetric[];

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}
