import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopwordOptionsStatus } from "./stopwordoptionsstatus";



// UpdateStopwordOptionsResponse
/** 
 * A response message that contains the status of updated stopword options.
**/
export class UpdateStopwordOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  stopwords: StopwordOptionsStatus;
}
