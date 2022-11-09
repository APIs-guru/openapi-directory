import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GlobalResourcesSharedModelsFileDownloadStateEnum {
    Created = "Created"
,    Available = "Available"
,    Removed = "Removed"
}


// GlobalResourcesSharedModelsFileDownload
/** 
 * A language used for string translations.
**/
export class GlobalResourcesSharedModelsFileDownload extends SpeakeasyBase {
  @Metadata({ data: "json, name=CRC, form, name=CRC;" })
  crc: string;

  @Metadata({ data: "json, name=ContentType, form, name=ContentType;" })
  contentType: string;

  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=IsPublic, form, name=IsPublic;" })
  isPublic: boolean;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @Metadata({ data: "json, name=Path, form, name=Path;" })
  path: string;

  @Metadata({ data: "json, name=Size, form, name=Size;" })
  size?: number;

  @Metadata({ data: "json, name=State, form, name=State;" })
  state: GlobalResourcesSharedModelsFileDownloadStateEnum;
}
