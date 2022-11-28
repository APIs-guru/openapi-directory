import { SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";
export declare class DescribeRulesPackagesRequest extends SpeakeasyBase {
    locale?: LocaleEnum;
    rulesPackageArns: string[];
}
