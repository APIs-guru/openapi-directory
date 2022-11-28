import { SpeakeasyBase } from "../../../internal/utils";
import { DiskImageFormatEnum } from "./diskimageformatenum";
import { ExportTaskS3Location } from "./exporttasks3location";
import { Tag } from "./tag";
export declare class ExportImageResult extends SpeakeasyBase {
    description?: string;
    diskImageFormat?: DiskImageFormatEnum;
    exportImageTaskId?: string;
    imageId?: string;
    progress?: string;
    roleName?: string;
    s3ExportLocation?: ExportTaskS3Location;
    status?: string;
    statusMessage?: string;
    tags?: Tag[];
}
