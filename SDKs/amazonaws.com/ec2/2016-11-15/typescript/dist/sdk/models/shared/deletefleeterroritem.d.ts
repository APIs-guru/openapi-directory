import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFleetError } from "./deletefleeterror";
/**
 * Describes an EC2 Fleet that was not successfully deleted.
**/
export declare class DeleteFleetErrorItem extends SpeakeasyBase {
    error?: DeleteFleetError;
    fleetId?: string;
}
