import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentSubmissionSharedBusinessEntitiesContentSubmissionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeTemplate, form, name=AttributeTemplate;" })
  attributeTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=CategoryTemplate, form, name=CategoryTemplate;" })
  categoryTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled, form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=InventoryPackageID, form, name=InventoryPackageID;" })
  inventoryPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobID, form, name=JobID;" })
  jobId?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseNotesDescription, form, name=ReleaseNotesDescription;" })
  releaseNotesDescription?: string;
}
