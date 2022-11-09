import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectedProperties
/** 
 * The detected properties of the input file. Elastic Transcoder identifies these values from the input file.
**/
export class DetectedProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @Metadata({ data: "json, name=FileSize" })
  fileSize?: number;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
