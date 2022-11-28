import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsUpdateGroupSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=Include, form, name=Include;" })
  include: boolean;

  @SpeakeasyMetadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateGroupID, form, name=UpdateGroupID;" })
  updateGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateGroupSubscriptionID, form, name=UpdateGroupSubscriptionID;" })
  updateGroupSubscriptionId?: number;
}
