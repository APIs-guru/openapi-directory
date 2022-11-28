import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageType } from "./updatesystemmodelspackagetype";


export enum UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum {
    Required = "Required",
    IncludeByDefault = "IncludeByDefault",
    ExcludeByDefault = "ExcludeByDefault"
}


export class UpdateSystemModelsAvailableSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PackageType" })
  packageType?: UpdateSystemModelsPackageType;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionType" })
  subscriptionType?: UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum;
}
