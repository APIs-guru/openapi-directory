import { SpeakeasyBase } from "../../../internal/utils";
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";
/**
 * Information about the master playlist.
**/
export declare class CreateJobPlaylist extends SpeakeasyBase {
    format?: string;
    hlsContentProtection?: HlsContentProtection;
    name?: string;
    outputKeys?: string[];
    playReadyDrm?: PlayReadyDrm;
}
