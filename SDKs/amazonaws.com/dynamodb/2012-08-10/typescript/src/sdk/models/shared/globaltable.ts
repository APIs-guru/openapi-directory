import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Replica } from "./replica";


// GlobalTable
/** 
 * Represents the properties of a global table.
**/
export class GlobalTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlobalTableName" })
  globalTableName?: string;

  @Metadata({ data: "json, name=ReplicationGroup", elemType: shared.Replica })
  replicationGroup?: Replica[];
}
