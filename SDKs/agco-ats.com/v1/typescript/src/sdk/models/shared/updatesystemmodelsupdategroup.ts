import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsUpdateGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InventoryFrequency, form, name=InventoryFrequency;" })
  inventoryFrequency?: number;

  @SpeakeasyMetadata({ data: "json, name=InventoryPackage, form, name=InventoryPackage;" })
  inventoryPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalizedDescription, form, name=LocalizedDescription;" })
  localizedDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalizedName, form, name=LocalizedName;" })
  localizedName?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority, form, name=Priority;" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=ReportField, form, name=ReportField;" })
  reportField?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateType, form, name=UpdateType;" })
  updateType: string;

  @SpeakeasyMetadata({ data: "json, name=ValidatingField, form, name=ValidatingField;" })
  validatingField?: string;

  @SpeakeasyMetadata({ data: "json, name=ValueToValidate, form, name=ValueToValidate;" })
  valueToValidate?: string;

  @SpeakeasyMetadata({ data: "json, name=Version, form, name=Version;" })
  version?: string;
}
