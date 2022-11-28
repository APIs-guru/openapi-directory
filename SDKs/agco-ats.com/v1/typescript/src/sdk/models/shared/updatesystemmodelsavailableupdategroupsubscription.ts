import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsAvailableSubscription } from "./updatesystemmodelsavailablesubscription";
import { UpdateSystemModelsUpdateGroup } from "./updatesystemmodelsupdategroup";



export class UpdateSystemModelsAvailableUpdateGroupSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailableSubscriptions", elemType: UpdateSystemModelsAvailableSubscription })
  availableSubscriptions?: UpdateSystemModelsAvailableSubscription[];

  @SpeakeasyMetadata({ data: "json, name=UpdateGroup" })
  updateGroup?: UpdateSystemModelsUpdateGroup;
}
