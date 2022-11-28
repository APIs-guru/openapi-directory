import { SpeakeasyBase } from "../../../internal/utils";
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";
/**
 * The <code>CreateJobOutput</code> structure.
**/
export declare class CreateJobOutput extends SpeakeasyBase {
    albumArt?: JobAlbumArt;
    captions?: Captions;
    composition?: Clip[];
    encryption?: Encryption;
    key?: string;
    presetId?: string;
    rotate?: string;
    segmentDuration?: string;
    thumbnailEncryption?: Encryption;
    thumbnailPattern?: string;
    watermarks?: JobWatermark[];
}
