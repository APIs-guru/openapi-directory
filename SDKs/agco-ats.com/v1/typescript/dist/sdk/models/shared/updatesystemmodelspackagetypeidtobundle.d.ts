import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum {
    Required = "Required",
    IncludeByDefault = "IncludeByDefault",
    ExcludeByDefault = "ExcludeByDefault"
}
export declare class UpdateSystemModelsPackageTypeIDtoBundle extends SpeakeasyBase {
    bundleId: string;
    packageTypeId: string;
    packageVersion: number;
    priority: number;
    subscriptionType?: UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum;
}
