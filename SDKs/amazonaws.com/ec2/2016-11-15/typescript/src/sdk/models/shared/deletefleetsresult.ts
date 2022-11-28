import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteFleetSuccessItem } from "./deletefleetsuccessitem";
import { DeleteFleetErrorItem } from "./deletefleeterroritem";



export class DeleteFleetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteFleetSuccessItem })
  successfulFleetDeletions?: DeleteFleetSuccessItem[];

  @SpeakeasyMetadata({ elemType: DeleteFleetErrorItem })
  unsuccessfulFleetDeletions?: DeleteFleetErrorItem[];
}
