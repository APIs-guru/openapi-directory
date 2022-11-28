import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";



// CreateJobPlaylist
/** 
 * Information about the master playlist.
**/
export class CreateJobPlaylist extends SpeakeasyBase {
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
}
