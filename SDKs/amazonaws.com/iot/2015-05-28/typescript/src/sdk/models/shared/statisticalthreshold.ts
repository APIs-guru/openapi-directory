import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatisticalThreshold
/** 
 * A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
**/
export class StatisticalThreshold extends SpeakeasyBase {
  @Metadata({ data: "json, name=statistic" })
  statistic?: string;
}
