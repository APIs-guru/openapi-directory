import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { TimestampRange } from "./timestamprange";
import { SeverityEnum } from "./severityenum";



// FindingFilter
/** 
 * This data type is used as a request parameter in the <a>ListFindings</a> action.
**/
export class FindingFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentIds" })
  agentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroups" })
  autoScalingGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=creationTimeRange" })
  creationTimeRange?: TimestampRange;

  @SpeakeasyMetadata({ data: "json, name=ruleNames" })
  ruleNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=severities" })
  severities?: SeverityEnum[];

  @SpeakeasyMetadata({ data: "json, name=userAttributes", elemType: Attribute })
  userAttributes?: Attribute[];
}
