import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientPolicy } from "./clientpolicy";



// BackendDefaults
/** 
 * An object that represents the default properties for a backend.
**/
export class BackendDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientPolicy" })
  clientPolicy?: ClientPolicy;
}
