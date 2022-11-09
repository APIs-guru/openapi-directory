import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";


// CreateJobOutput
/** 
 * The <code>CreateJobOutput</code> structure.
**/
export class CreateJobOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumArt" })
  albumArt?: JobAlbumArt;

  @Metadata({ data: "json, name=Captions" })
  captions?: Captions;

  @Metadata({ data: "json, name=Composition", elemType: shared.Clip })
  composition?: Clip[];

  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=PresetId" })
  presetId?: string;

  @Metadata({ data: "json, name=Rotate" })
  rotate?: string;

  @Metadata({ data: "json, name=SegmentDuration" })
  segmentDuration?: string;

  @Metadata({ data: "json, name=ThumbnailEncryption" })
  thumbnailEncryption?: Encryption;

  @Metadata({ data: "json, name=ThumbnailPattern" })
  thumbnailPattern?: string;

  @Metadata({ data: "json, name=Watermarks", elemType: shared.JobWatermark })
  watermarks?: JobWatermark[];
}
