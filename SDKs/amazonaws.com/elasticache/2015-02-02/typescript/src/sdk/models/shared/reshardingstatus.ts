import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotMigration } from "./slotmigration";



// ReshardingStatus
/** 
 * The status of an online resharding operation.
**/
export class ReshardingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  slotMigration?: SlotMigration;
}
