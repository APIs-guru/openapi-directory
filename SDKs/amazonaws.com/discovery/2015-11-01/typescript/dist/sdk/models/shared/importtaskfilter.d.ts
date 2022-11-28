import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTaskFilterNameEnum } from "./importtaskfilternameenum";
/**
 * <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
**/
export declare class ImportTaskFilter extends SpeakeasyBase {
    name?: ImportTaskFilterNameEnum;
    values?: string[];
}
