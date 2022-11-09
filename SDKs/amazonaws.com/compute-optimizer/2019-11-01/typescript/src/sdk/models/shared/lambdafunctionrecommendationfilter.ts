import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionRecommendationFilterNameEnum } from "./lambdafunctionrecommendationfilternameenum";


// LambdaFunctionRecommendationFilter
/** 
 * <p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
**/
export class LambdaFunctionRecommendationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: LambdaFunctionRecommendationFilterNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
