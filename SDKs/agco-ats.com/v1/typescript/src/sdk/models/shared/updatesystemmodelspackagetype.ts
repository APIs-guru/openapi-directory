import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsPackageType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attribute, form, name=Attribute;" })
  attribute?: string;

  @Metadata({ data: "json, name=Category, form, name=Category;" })
  category?: string;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=Icon, form, name=Icon;" })
  icon?: string;

  @Metadata({ data: "json, name=InventoryFrequency, form, name=InventoryFrequency;" })
  inventoryFrequency?: number;

  @Metadata({ data: "json, name=InventoryPackage, form, name=InventoryPackage;" })
  inventoryPackage?: string;

  @Metadata({ data: "json, name=LocalizedDescription, form, name=LocalizedDescription;" })
  localizedDescription?: string;

  @Metadata({ data: "json, name=LocalizedName, form, name=LocalizedName;" })
  localizedName?: string;

  @Metadata({ data: "json, name=MaxDeltaPackages, form, name=MaxDeltaPackages;" })
  maxDeltaPackages?: number;

  @Metadata({ data: "json, name=PackageTypeID, form, name=PackageTypeID;" })
  packageTypeId?: string;
}
