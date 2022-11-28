import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Computer } from "./computer";



// CreateComputerResult
/** 
 * Contains the results for the <a>CreateComputer</a> operation.
**/
export class CreateComputerResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Computer" })
  computer?: Computer;
}
