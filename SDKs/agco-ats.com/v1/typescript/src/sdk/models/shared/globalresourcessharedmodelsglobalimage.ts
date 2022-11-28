import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsGlobalImageCategory } from "./globalresourcessharedmodelsglobalimagecategory";


export enum GlobalResourcesSharedModelsGlobalImageStateEnum {
    Created = "Created",
    Available = "Available",
    Removed = "Removed"
}


// GlobalResourcesSharedModelsGlobalImage
/** 
 * An image from the Global Image library.
**/
export class GlobalResourcesSharedModelsGlobalImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CRC" })
  crc: string;

  @SpeakeasyMetadata({ data: "json, name=Categories", elemType: GlobalResourcesSharedModelsGlobalImageCategory })
  categories?: GlobalResourcesSharedModelsGlobalImageCategory[];

  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: GlobalResourcesSharedModelsGlobalImageStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailCRC" })
  thumbnailCrc: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailSize" })
  thumbnailSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width: number;
}
