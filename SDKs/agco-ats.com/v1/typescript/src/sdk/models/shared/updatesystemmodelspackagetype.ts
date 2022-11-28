import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsPackageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attribute, form, name=Attribute;" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=Category, form, name=Category;" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Icon, form, name=Icon;" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=InventoryFrequency, form, name=InventoryFrequency;" })
  inventoryFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=InventoryPackage, form, name=InventoryPackage;" })
  inventoryPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalizedDescription, form, name=LocalizedDescription;" })
  localizedDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalizedName, form, name=LocalizedName;" })
  localizedName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxDeltaPackages, form, name=MaxDeltaPackages;" })
  maxDeltaPackages?: number;

  @SpeakeasyMetadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId?: string;
}
