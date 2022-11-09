import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryLimits } from "./directorylimits";


// GetDirectoryLimitsResult
/** 
 * Contains the results of the <a>GetDirectoryLimits</a> operation.
**/
export class GetDirectoryLimitsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryLimits" })
  directoryLimits?: DirectoryLimits;
}
