import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsFilterNameEnum } from "./ebsfilternameenum";


// EbsFilter
/** 
 * <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p> <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
**/
export class EbsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: EbsFilterNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
