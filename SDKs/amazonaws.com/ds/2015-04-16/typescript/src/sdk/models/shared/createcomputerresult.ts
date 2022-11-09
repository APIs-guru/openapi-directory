import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Computer } from "./computer";


// CreateComputerResult
/** 
 * Contains the results for the <a>CreateComputer</a> operation.
**/
export class CreateComputerResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Computer" })
  computer?: Computer;
}
