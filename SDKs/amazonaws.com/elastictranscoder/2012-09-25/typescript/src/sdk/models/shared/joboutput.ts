import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";



// JobOutput
/** 
 * <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
**/
export class JobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlbumArt" })
  albumArt?: JobAlbumArt;

  @SpeakeasyMetadata({ data: "json, name=AppliedColorSpaceConversion" })
  appliedColorSpaceConversion?: string;

  @SpeakeasyMetadata({ data: "json, name=Captions" })
  captions?: Captions;

  @SpeakeasyMetadata({ data: "json, name=Composition", elemType: Clip })
  composition?: Clip[];

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=FileSize" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=PresetId" })
  presetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Rotate" })
  rotate?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentDuration" })
  segmentDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailEncryption" })
  thumbnailEncryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailPattern" })
  thumbnailPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: JobWatermark })
  watermarks?: JobWatermark[];

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
