import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScopeTypeEnum } from "./scopetypeenum";



// Scope
/** 
 * This data type contains key-value pairs that identify various Amazon resources.
**/
export class Scope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: ScopeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
