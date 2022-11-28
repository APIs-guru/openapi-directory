import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskS3Location } from "./exporttasks3location";
import { Tag } from "./tag";
/**
 * Describes an export image task.
**/
export declare class ExportImageTask extends SpeakeasyBase {
    description?: string;
    exportImageTaskId?: string;
    imageId?: string;
    progress?: string;
    s3ExportLocation?: ExportTaskS3Location;
    status?: string;
    statusMessage?: string;
    tags?: Tag[];
}
