import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
/**
 * Describes a security group rule.
**/
export declare class AnalysisSecurityGroupRule extends SpeakeasyBase {
    cidr?: string;
    direction?: string;
    portRange?: PortRange;
    prefixListId?: string;
    protocol?: string;
    securityGroupId?: string;
}
