import { SpeakeasyBase } from "../../../internal/utils";
import { HlsContentProtection } from "./hlscontentprotection";
import { PlayReadyDrm } from "./playreadydrm";
/**
 *  Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.
**/
export declare class Playlist extends SpeakeasyBase {
    format?: string;
    hlsContentProtection?: HlsContentProtection;
    name?: string;
    outputKeys?: string[];
    playReadyDrm?: PlayReadyDrm;
    status?: string;
    statusDetail?: string;
}
