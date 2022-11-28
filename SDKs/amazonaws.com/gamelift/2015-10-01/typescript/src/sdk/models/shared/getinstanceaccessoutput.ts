import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAccess } from "./instanceaccess";



// GetInstanceAccessOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class GetInstanceAccessOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceAccess" })
  instanceAccess?: InstanceAccess;
}
