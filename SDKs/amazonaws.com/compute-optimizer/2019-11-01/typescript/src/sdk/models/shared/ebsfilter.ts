import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsFilterNameEnum } from "./ebsfilternameenum";



// EbsFilter
/** 
 * <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p> <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code> with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
**/
export class EbsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: EbsFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
