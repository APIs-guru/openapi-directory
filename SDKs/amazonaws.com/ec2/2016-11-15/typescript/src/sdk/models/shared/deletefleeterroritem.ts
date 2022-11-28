import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteFleetError } from "./deletefleeterror";



// DeleteFleetErrorItem
/** 
 * Describes an EC2 Fleet that was not successfully deleted.
**/
export class DeleteFleetErrorItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: DeleteFleetError;

  @SpeakeasyMetadata()
  fleetId?: string;
}
