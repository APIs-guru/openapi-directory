import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";



// CreateJobOutput
/** 
 * The <code>CreateJobOutput</code> structure.
**/
export class CreateJobOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlbumArt" })
  albumArt?: JobAlbumArt;

  @SpeakeasyMetadata({ data: "json, name=Captions" })
  captions?: Captions;

  @SpeakeasyMetadata({ data: "json, name=Composition", elemType: Clip })
  composition?: Clip[];

  @SpeakeasyMetadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=PresetId" })
  presetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Rotate" })
  rotate?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentDuration" })
  segmentDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailEncryption" })
  thumbnailEncryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailPattern" })
  thumbnailPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=Watermarks", elemType: JobWatermark })
  watermarks?: JobWatermark[];
}
