import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileAccessLog
/** 
 * An object that represents an access log file.
**/
export class FileAccessLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
