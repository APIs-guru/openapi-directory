import { SpeakeasyBase } from "../../../internal/utils";
import { FleetActionEnum } from "./fleetactionenum";
/**
 * Represents the input for a request operation.
**/
export declare class StartFleetActionsInput extends SpeakeasyBase {
    actions: FleetActionEnum[];
    fleetId: string;
    location?: string;
}
