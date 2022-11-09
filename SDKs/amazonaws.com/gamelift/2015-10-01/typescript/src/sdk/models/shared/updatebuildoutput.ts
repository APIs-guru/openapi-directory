import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Build } from "./build";


// UpdateBuildOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateBuildOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Build" })
  build?: Build;
}
