import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationInfo } from "./applicationinfo";


// GetApplicationOutput
/** 
 * Represents the output of a <code>GetApplication</code> operation.
**/
export class GetApplicationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application?: ApplicationInfo;
}
