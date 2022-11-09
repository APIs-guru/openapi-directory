import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum {
    Required = "Required"
,    IncludeByDefault = "IncludeByDefault"
,    ExcludeByDefault = "ExcludeByDefault"
}


export class UpdateSystemModelsPackageTypeIDtoBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleID, form, name=BundleID;" })
  bundleId: string;

  @Metadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId: string;

  @Metadata({ data: "json, name=PackageVersion, form, name=PackageVersion;" })
  packageVersion: number;

  @Metadata({ data: "json, name=Priority, form, name=Priority;" })
  priority: number;

  @Metadata({ data: "json, name=SubscriptionType, form, name=SubscriptionType;" })
  subscriptionType?: UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum;
}
