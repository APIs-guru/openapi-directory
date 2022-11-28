import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdministrativeActionFailureDetails
/** 
 * Provides information about a failed administrative action.
**/
export class AdministrativeActionFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
