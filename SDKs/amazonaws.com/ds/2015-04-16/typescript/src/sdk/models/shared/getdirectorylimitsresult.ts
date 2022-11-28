import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryLimits } from "./directorylimits";



// GetDirectoryLimitsResult
/** 
 * Contains the results of the <a>GetDirectoryLimits</a> operation.
**/
export class GetDirectoryLimitsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryLimits" })
  directoryLimits?: DirectoryLimits;
}
