import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsUpdateGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: string;

  @Metadata({ data: "json, name=InventoryFrequency, form, name=InventoryFrequency;" })
  inventoryFrequency?: number;

  @Metadata({ data: "json, name=InventoryPackage, form, name=InventoryPackage;" })
  inventoryPackage?: string;

  @Metadata({ data: "json, name=LocalizedDescription, form, name=LocalizedDescription;" })
  localizedDescription?: string;

  @Metadata({ data: "json, name=LocalizedName, form, name=LocalizedName;" })
  localizedName?: string;

  @Metadata({ data: "json, name=Priority, form, name=Priority;" })
  priority: number;

  @Metadata({ data: "json, name=ReportField, form, name=ReportField;" })
  reportField?: string;

  @Metadata({ data: "json, name=UpdateType, form, name=UpdateType;" })
  updateType: string;

  @Metadata({ data: "json, name=ValidatingField, form, name=ValidatingField;" })
  validatingField?: string;

  @Metadata({ data: "json, name=ValueToValidate, form, name=ValueToValidate;" })
  valueToValidate?: string;

  @Metadata({ data: "json, name=Version, form, name=Version;" })
  version?: string;
}
