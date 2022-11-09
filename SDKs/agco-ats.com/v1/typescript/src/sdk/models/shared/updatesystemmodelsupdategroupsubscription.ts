import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsUpdateGroupSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId: string;

  @Metadata({ data: "json, name=Include, form, name=Include;" })
  include: boolean;

  @Metadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId: string;

  @Metadata({ data: "json, name=UpdateGroupID, form, name=UpdateGroupID;" })
  updateGroupId: string;

  @Metadata({ data: "json, name=UpdateGroupSubscriptionID, form, name=UpdateGroupSubscriptionID;" })
  updateGroupSubscriptionId?: number;
}
