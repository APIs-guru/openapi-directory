import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsAvailableSubscription } from "./updatesystemmodelsavailablesubscription";
import { UpdateSystemModelsUpdateGroup } from "./updatesystemmodelsupdategroup";


export class UpdateSystemModelsAvailableUpdateGroupSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailableSubscriptions", elemType: shared.UpdateSystemModelsAvailableSubscription })
  availableSubscriptions?: UpdateSystemModelsAvailableSubscription[];

  @Metadata({ data: "json, name=UpdateGroup" })
  updateGroup?: UpdateSystemModelsUpdateGroup;
}
