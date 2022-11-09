import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";


// JobOutput
/** 
 * <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
**/
export class JobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumArt" })
  albumArt?: JobAlbumArt;

  @Metadata({ data: "json, name=AppliedColorSpaceConversion" })
  appliedColorSpaceConversion?: string;

  @Metadata({ data: "json, name=Captions" })
  captions?: Captions;

  @Metadata({ data: "json, name=Composition", elemType: shared.Clip })
  composition?: Clip[];

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=FileSize" })
  fileSize?: number;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: string;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=PresetId" })
  presetId?: string;

  @Metadata({ data: "json, name=Rotate" })
  rotate?: string;

  @Metadata({ data: "json, name=SegmentDuration" })
  segmentDuration?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;

  @Metadata({ data: "json, name=ThumbnailEncryption" })
  thumbnailEncryption?: Encryption;

  @Metadata({ data: "json, name=ThumbnailPattern" })
  thumbnailPattern?: string;

  @Metadata({ data: "json, name=Watermarks", elemType: shared.JobWatermark })
  watermarks?: JobWatermark[];

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
