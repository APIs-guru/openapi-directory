import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";
import { TimestampRange } from "./timestamprange";
import { SeverityEnum } from "./severityenum";
import { Attribute } from "./attribute";


// FindingFilter
/** 
 * This data type is used as a request parameter in the <a>ListFindings</a> action.
**/
export class FindingFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentIds" })
  agentIds?: string[];

  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=autoScalingGroups" })
  autoScalingGroups?: string[];

  @Metadata({ data: "json, name=creationTimeRange" })
  creationTimeRange?: TimestampRange;

  @Metadata({ data: "json, name=ruleNames" })
  ruleNames?: string[];

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns?: string[];

  @Metadata({ data: "json, name=severities" })
  severities?: SeverityEnum[];

  @Metadata({ data: "json, name=userAttributes", elemType: shared.Attribute })
  userAttributes?: Attribute[];
}
