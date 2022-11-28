import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";



// GlobalTable
/** 
 * Represents the properties of a global table.
**/
export class GlobalTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GlobalTableName" })
  globalTableName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationGroup", elemType: Replica })
  replicationGroup?: Replica[];
}
