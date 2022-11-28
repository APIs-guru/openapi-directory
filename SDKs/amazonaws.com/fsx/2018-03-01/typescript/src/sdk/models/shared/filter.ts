import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterNameEnum } from "./filternameenum";



// Filter
/** 
 * A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: FilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
