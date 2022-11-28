import { SpeakeasyBase } from "../../../internal/utils";
import { FleetActionEnum } from "./fleetactionenum";
/**
 * Represents the input for a request operation.
**/
export declare class StopFleetActionsInput extends SpeakeasyBase {
    actions: FleetActionEnum[];
    fleetId: string;
    location?: string;
}
