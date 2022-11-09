import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClientPolicy } from "./clientpolicy";


// BackendDefaults
/** 
 * An object that represents the default properties for a backend.
**/
export class BackendDefaults extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientPolicy" })
  clientPolicy?: ClientPolicy;
}
