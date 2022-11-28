import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionRecommendationFilterNameEnum } from "./lambdafunctionrecommendationfilternameenum";
/**
 * <p>Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p> <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
**/
export declare class LambdaFunctionRecommendationFilter extends SpeakeasyBase {
    name?: LambdaFunctionRecommendationFilterNameEnum;
    values?: string[];
}
