import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsGlobalImageCategory } from "./globalresourcessharedmodelsglobalimagecategory";

export enum GlobalResourcesSharedModelsGlobalImageStateEnum {
    Created = "Created"
,    Available = "Available"
,    Removed = "Removed"
}


// GlobalResourcesSharedModelsGlobalImage
/** 
 * An image from the Global Image library.
**/
export class GlobalResourcesSharedModelsGlobalImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CRC" })
  crc: string;

  @Metadata({ data: "json, name=Categories", elemType: shared.GlobalResourcesSharedModelsGlobalImageCategory })
  categories?: GlobalResourcesSharedModelsGlobalImageCategory[];

  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Height" })
  height: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=State" })
  state: GlobalResourcesSharedModelsGlobalImageStateEnum;

  @Metadata({ data: "json, name=ThumbnailCRC" })
  thumbnailCrc: string;

  @Metadata({ data: "json, name=ThumbnailSize" })
  thumbnailSize?: number;

  @Metadata({ data: "json, name=Width" })
  width: number;
}
