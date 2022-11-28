import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StemmingOptionsStatus } from "./stemmingoptionsstatus";



// UpdateStemmingOptionsResponse
/** 
 * A response message that contains the status of updated stemming options.
**/
export class UpdateStemmingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  stems: StemmingOptionsStatus;
}
