import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateSystemModelsPackageType } from "./updatesystemmodelspackagetype";

export enum UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum {
    Required = "Required"
,    IncludeByDefault = "IncludeByDefault"
,    ExcludeByDefault = "ExcludeByDefault"
}


export class UpdateSystemModelsAvailableSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=PackageType" })
  packageType?: UpdateSystemModelsPackageType;

  @Metadata({ data: "json, name=SubscriptionType" })
  subscriptionType?: UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum;
}
