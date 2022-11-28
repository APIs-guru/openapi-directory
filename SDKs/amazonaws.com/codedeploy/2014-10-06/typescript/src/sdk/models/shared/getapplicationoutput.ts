import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationInfo } from "./applicationinfo";



// GetApplicationOutput
/** 
 * Represents the output of a <code>GetApplication</code> operation.
**/
export class GetApplicationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: ApplicationInfo;
}
