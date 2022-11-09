import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";


// CreateJobPlaylist
/** 
 * Information about the master playlist.
**/
export class CreateJobPlaylist extends SpeakeasyBase {
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
}
