import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScopeTypeEnum } from "./scopetypeenum";


// Scope
/** 
 * This data type contains key-value pairs that identify various Amazon resources.
**/
export class Scope extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: ScopeTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
