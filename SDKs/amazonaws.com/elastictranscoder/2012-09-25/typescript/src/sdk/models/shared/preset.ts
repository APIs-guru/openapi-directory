import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioParameters } from "./audioparameters";
import { Thumbnails } from "./thumbnails";
import { VideoParameters } from "./videoparameters";



// Preset
/** 
 * Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.
**/
export class Preset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Audio" })
  audio?: AudioParameters;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Thumbnails" })
  thumbnails?: Thumbnails;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Video" })
  video?: VideoParameters;
}
