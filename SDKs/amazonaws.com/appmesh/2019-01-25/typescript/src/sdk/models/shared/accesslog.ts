import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileAccessLog } from "./fileaccesslog";


// AccessLog
/** 
 * An object that represents the access logging information for a virtual node.
**/
export class AccessLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: FileAccessLog;
}
