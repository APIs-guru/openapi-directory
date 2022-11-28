import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EstimatedResourceSize } from "./estimatedresourcesize";



// DatastoreStatistics
/** 
 * Statistical information about the data store.
**/
export class DatastoreStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: EstimatedResourceSize;
}
