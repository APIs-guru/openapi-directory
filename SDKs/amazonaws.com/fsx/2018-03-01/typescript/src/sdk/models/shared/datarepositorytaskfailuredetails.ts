import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataRepositoryTaskFailureDetails
/** 
 * Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.
**/
export class DataRepositoryTaskFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
