import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";


// Playlist
/** 
 *  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30. 
**/
export class Playlist extends SpeakeasyBase {
  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=HlsContentProtection" })
  hlsContentProtection?: HlsContentProtection;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutputKeys" })
  outputKeys?: string[];

  @Metadata({ data: "json, name=PlayReadyDrm" })
  playReadyDrm?: PlayReadyDrm;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;
}
