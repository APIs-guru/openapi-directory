import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportTaskFilterNameEnum } from "./importtaskfilternameenum";



// ImportTaskFilter
/** 
 * <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
**/
export class ImportTaskFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ImportTaskFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
