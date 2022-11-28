import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatastoreActivity
/** 
 * The datastore activity that specifies where to store the processed data.
**/
export class DatastoreActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastoreName" })
  datastoreName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
