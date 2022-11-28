import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfigRule } from "./organizationconfigrule";
export declare class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationConfigRules?: OrganizationConfigRule[];
}
