import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileAccessLog
/** 
 * An object that represents an access log file.
**/
export class FileAccessLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path: string;
}
