import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Capacity
/** 
 * Represents the amount of provisioned throughput capacity consumed on a table or an index.
**/
export class Capacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityUnits" })
  capacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}
