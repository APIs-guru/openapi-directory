import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
/**
 * Describes a network access control (ACL) rule.
**/
export declare class AnalysisAclRule extends SpeakeasyBase {
    cidr?: string;
    egress?: boolean;
    portRange?: PortRange;
    protocol?: string;
    ruleAction?: string;
    ruleNumber?: number;
}
