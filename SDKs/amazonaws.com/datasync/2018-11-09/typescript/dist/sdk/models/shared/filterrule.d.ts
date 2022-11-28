import { SpeakeasyBase } from "../../../internal/utils";
import { FilterTypeEnum } from "./filtertypeenum";
/**
 * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
**/
export declare class FilterRule extends SpeakeasyBase {
    filterType?: FilterTypeEnum;
    value?: string;
}
