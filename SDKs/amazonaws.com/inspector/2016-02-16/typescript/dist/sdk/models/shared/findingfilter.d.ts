import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { TimestampRange } from "./timestamprange";
import { SeverityEnum } from "./severityenum";
/**
 * This data type is used as a request parameter in the <a>ListFindings</a> action.
**/
export declare class FindingFilter extends SpeakeasyBase {
    agentIds?: string[];
    attributes?: Attribute[];
    autoScalingGroups?: string[];
    creationTimeRange?: TimestampRange;
    ruleNames?: string[];
    rulesPackageArns?: string[];
    severities?: SeverityEnum[];
    userAttributes?: Attribute[];
}
