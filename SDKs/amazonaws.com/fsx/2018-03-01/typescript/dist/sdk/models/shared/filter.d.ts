import { SpeakeasyBase } from "../../../internal/utils";
import { FilterNameEnum } from "./filternameenum";
/**
 * A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.
**/
export declare class Filter extends SpeakeasyBase {
    name?: FilterNameEnum;
    values?: string[];
}
