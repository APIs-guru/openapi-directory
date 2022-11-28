import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";



// Playlist
/** 
 *  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30. 
**/
export class Playlist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=HlsContentProtection" })
  hlsContentProtection?: HlsContentProtection;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputKeys" })
  outputKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=PlayReadyDrm" })
  playReadyDrm?: PlayReadyDrm;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;
}
