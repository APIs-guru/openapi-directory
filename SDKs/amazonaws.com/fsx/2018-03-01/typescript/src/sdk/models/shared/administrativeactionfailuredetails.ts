import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdministrativeActionFailureDetails
/** 
 * Provides information about a failed administrative action.
**/
export class AdministrativeActionFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
