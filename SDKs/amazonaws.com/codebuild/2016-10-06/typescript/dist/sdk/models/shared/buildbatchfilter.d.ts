import { SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Specifies filters when retrieving batch builds.
**/
export declare class BuildBatchFilter extends SpeakeasyBase {
    status?: StatusTypeEnum;
}
