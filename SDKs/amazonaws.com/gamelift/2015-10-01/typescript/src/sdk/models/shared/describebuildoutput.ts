import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Build } from "./build";


// DescribeBuildOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeBuildOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Build" })
  build?: Build;
}
