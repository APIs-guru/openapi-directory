import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFleetSuccessItem } from "./deletefleetsuccessitem";
import { DeleteFleetErrorItem } from "./deletefleeterroritem";
export declare class DeleteFleetsResult extends SpeakeasyBase {
    successfulFleetDeletions?: DeleteFleetSuccessItem[];
    unsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}
