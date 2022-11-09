import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterNameEnum } from "./filternameenum";


// Filter
/** 
 * <p>Describes a filter that returns a more specific list of recommendations. Use this filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action.</p>
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: FilterNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
