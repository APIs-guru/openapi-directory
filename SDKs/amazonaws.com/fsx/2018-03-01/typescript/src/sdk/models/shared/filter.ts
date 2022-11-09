import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterNameEnum } from "./filternameenum";


// Filter
/** 
 * A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: FilterNameEnum;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
