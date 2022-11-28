import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum {
    Required = "Required",
    IncludeByDefault = "IncludeByDefault",
    ExcludeByDefault = "ExcludeByDefault"
}


export class UpdateSystemModelsPackageTypeIDtoBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleID, form, name=BundleID;" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=PackageVersion, form, name=PackageVersion;" })
  packageVersion: number;

  @SpeakeasyMetadata({ data: "json, name=Priority, form, name=Priority;" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionType, form, name=SubscriptionType;" })
  subscriptionType?: UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum;
}
