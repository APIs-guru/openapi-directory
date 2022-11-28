import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFleetError } from "./createfleeterror";
import { CreateFleetInstance } from "./createfleetinstance";
export declare class CreateFleetResult extends SpeakeasyBase {
    errors?: CreateFleetError[];
    fleetId?: string;
    instances?: CreateFleetInstance[];
}
