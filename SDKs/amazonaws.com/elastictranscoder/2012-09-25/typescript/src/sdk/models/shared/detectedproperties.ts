import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectedProperties
/** 
 * The detected properties of the input file. Elastic Transcoder identifies these values from the input file.
**/
export class DetectedProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=FileSize" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
