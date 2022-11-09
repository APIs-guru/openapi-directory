import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatastoreActivity
/** 
 * The datastore activity that specifies where to store the processed data.
**/
export class DatastoreActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastoreName" })
  datastoreName: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
