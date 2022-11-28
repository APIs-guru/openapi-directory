import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";



// DescribeBuildOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeBuildOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Build" })
  build?: Build;
}
