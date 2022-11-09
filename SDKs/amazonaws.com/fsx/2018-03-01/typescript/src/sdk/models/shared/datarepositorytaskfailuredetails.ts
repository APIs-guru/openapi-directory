import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataRepositoryTaskFailureDetails
/** 
 * Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.
**/
export class DataRepositoryTaskFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
