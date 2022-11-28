import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.
**/
export declare class RulesPackage extends SpeakeasyBase {
    arn: string;
    description?: string;
    name: string;
    provider: string;
    version: string;
}
