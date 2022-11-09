import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportTaskFilterNameEnum } from "./importtaskfilternameenum";


// ImportTaskFilter
/** 
 * <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
**/
export class ImportTaskFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: ImportTaskFilterNameEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
