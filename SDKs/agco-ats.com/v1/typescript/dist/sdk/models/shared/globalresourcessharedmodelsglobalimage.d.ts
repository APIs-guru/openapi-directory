import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsGlobalImageCategory } from "./globalresourcessharedmodelsglobalimagecategory";
export declare enum GlobalResourcesSharedModelsGlobalImageStateEnum {
    Created = "Created",
    Available = "Available",
    Removed = "Removed"
}
/**
 * An image from the Global Image library.
**/
export declare class GlobalResourcesSharedModelsGlobalImage extends SpeakeasyBase {
    crc: string;
    categories?: GlobalResourcesSharedModelsGlobalImageCategory[];
    date?: Date;
    description: string;
    height: number;
    id?: string;
    name: string;
    publisher?: string;
    size?: number;
    state: GlobalResourcesSharedModelsGlobalImageStateEnum;
    thumbnailCrc: string;
    thumbnailSize?: number;
    width: number;
}
