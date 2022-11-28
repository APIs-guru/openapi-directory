import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectedProperties } from "./detectedproperties";
import { Encryption } from "./encryption";
import { InputCaptions } from "./inputcaptions";
import { TimeSpan } from "./timespan";



// JobInput
/** 
 * Information about the file that you're transcoding.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=DetectedProperties" })
  detectedProperties?: DetectedProperties;

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=InputCaptions" })
  inputCaptions?: InputCaptions;

  @SpeakeasyMetadata({ data: "json, name=Interlaced" })
  interlaced?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeSpan" })
  timeSpan?: TimeSpan;
}
