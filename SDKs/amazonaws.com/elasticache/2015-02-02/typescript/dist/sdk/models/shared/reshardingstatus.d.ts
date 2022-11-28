import { SpeakeasyBase } from "../../../internal/utils";
import { SlotMigration } from "./slotmigration";
/**
 * The status of an online resharding operation.
**/
export declare class ReshardingStatus extends SpeakeasyBase {
    slotMigration?: SlotMigration;
}
