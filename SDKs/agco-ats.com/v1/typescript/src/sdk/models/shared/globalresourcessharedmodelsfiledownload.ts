import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GlobalResourcesSharedModelsFileDownloadStateEnum {
    Created = "Created",
    Available = "Available",
    Removed = "Removed"
}


// GlobalResourcesSharedModelsFileDownload
/** 
 * A language used for string translations.
**/
export class GlobalResourcesSharedModelsFileDownload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CRC, form, name=CRC;" })
  crc: string;

  @SpeakeasyMetadata({ data: "json, name=ContentType, form, name=ContentType;" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsPublic, form, name=IsPublic;" })
  isPublic: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Path, form, name=Path;" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=Size, form, name=Size;" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=State, form, name=State;" })
  state: GlobalResourcesSharedModelsFileDownloadStateEnum;
}
