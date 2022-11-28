import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



// UpdateBuildOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateBuildOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Build" })
  build?: Build;
}
