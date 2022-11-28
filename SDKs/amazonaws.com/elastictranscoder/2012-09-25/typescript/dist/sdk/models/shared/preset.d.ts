import { SpeakeasyBase } from "../../../internal/utils";
import { AudioParameters } from "./audioparameters";
import { Thumbnails } from "./thumbnails";
import { VideoParameters } from "./videoparameters";
/**
 * Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.
**/
export declare class Preset extends SpeakeasyBase {
    arn?: string;
    audio?: AudioParameters;
    container?: string;
    description?: string;
    id?: string;
    name?: string;
    thumbnails?: Thumbnails;
    type?: string;
    video?: VideoParameters;
}
