import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectedProperties } from "./detectedproperties";
import { Encryption } from "./encryption";
import { InputCaptions } from "./inputcaptions";
import { TimeSpan } from "./timespan";


// JobInput
/** 
 * Information about the file that you're transcoding.
**/
export class JobInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=DetectedProperties" })
  detectedProperties?: DetectedProperties;

  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @Metadata({ data: "json, name=InputCaptions" })
  inputCaptions?: InputCaptions;

  @Metadata({ data: "json, name=Interlaced" })
  interlaced?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=TimeSpan" })
  timeSpan?: TimeSpan;
}
