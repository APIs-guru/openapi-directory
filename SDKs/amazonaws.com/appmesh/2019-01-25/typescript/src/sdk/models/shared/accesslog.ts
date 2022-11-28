import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileAccessLog } from "./fileaccesslog";



// AccessLog
/** 
 * An object that represents the access logging information for a virtual node.
**/
export class AccessLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: FileAccessLog;
}
