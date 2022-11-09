import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EstimatedResourceSize } from "./estimatedresourcesize";


// DatastoreStatistics
/** 
 * Statistical information about the data store.
**/
export class DatastoreStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: EstimatedResourceSize;
}
