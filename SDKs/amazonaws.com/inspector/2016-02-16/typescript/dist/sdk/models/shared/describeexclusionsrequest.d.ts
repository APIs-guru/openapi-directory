import { SpeakeasyBase } from "../../../internal/utils";
import { LocaleEnum } from "./localeenum";
export declare class DescribeExclusionsRequest extends SpeakeasyBase {
    exclusionArns: string[];
    locale?: LocaleEnum;
}
