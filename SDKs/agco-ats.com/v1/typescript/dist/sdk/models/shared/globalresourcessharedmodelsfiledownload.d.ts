import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GlobalResourcesSharedModelsFileDownloadStateEnum {
    Created = "Created",
    Available = "Available",
    Removed = "Removed"
}
/**
 * A language used for string translations.
**/
export declare class GlobalResourcesSharedModelsFileDownload extends SpeakeasyBase {
    crc: string;
    contentType: string;
    description: string;
    id?: string;
    isPublic: boolean;
    name: string;
    path: string;
    size?: number;
    state: GlobalResourcesSharedModelsFileDownloadStateEnum;
}
