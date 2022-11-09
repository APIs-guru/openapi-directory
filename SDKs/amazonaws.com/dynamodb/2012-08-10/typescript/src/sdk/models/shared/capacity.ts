import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Capacity
/** 
 * Represents the amount of provisioned throughput capacity consumed on a table or an index.
**/
export class Capacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=CapacityUnits" })
  capacityUnits?: number;

  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @Metadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}
