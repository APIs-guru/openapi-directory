import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentSubmissionSharedBusinessEntitiesContentSubmissionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeTemplate, form, name=AttributeTemplate;" })
  attributeTemplate?: string;

  @Metadata({ data: "json, name=CategoryTemplate, form, name=CategoryTemplate;" })
  categoryTemplate?: string;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=Enabled, form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @Metadata({ data: "json, name=InventoryPackageID, form, name=InventoryPackageID;" })
  inventoryPackageId?: string;

  @Metadata({ data: "json, name=JobID, form, name=JobID;" })
  jobId?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @Metadata({ data: "json, name=ReleaseNotesDescription, form, name=ReleaseNotesDescription;" })
  releaseNotesDescription?: string;
}
