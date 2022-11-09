import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataRepositoryFailureDetails
/** 
 * Provides detailed information about the data respository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code>.
**/
export class DataRepositoryFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
