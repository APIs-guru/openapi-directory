import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAccess } from "./instanceaccess";


// GetInstanceAccessOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class GetInstanceAccessOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceAccess" })
  instanceAccess?: InstanceAccess;
}
