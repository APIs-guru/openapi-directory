import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsPackageType } from "./updatesystemmodelspackagetype";
export declare enum UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum {
    Required = "Required",
    IncludeByDefault = "IncludeByDefault",
    ExcludeByDefault = "ExcludeByDefault"
}
export declare class UpdateSystemModelsAvailableSubscription extends SpeakeasyBase {
    packageType?: UpdateSystemModelsPackageType;
    subscriptionType?: UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum;
}
