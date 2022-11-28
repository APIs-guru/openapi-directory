import { SpeakeasyBase } from "../../../internal/utils";
import { JobAlbumArt } from "./jobalbumart";
import { Captions } from "./captions";
import { Clip } from "./clip";
import { Encryption } from "./encryption";
import { JobWatermark } from "./jobwatermark";
/**
 * <important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>
**/
export declare class JobOutput extends SpeakeasyBase {
    albumArt?: JobAlbumArt;
    appliedColorSpaceConversion?: string;
    captions?: Captions;
    composition?: Clip[];
    duration?: number;
    durationMillis?: number;
    encryption?: Encryption;
    fileSize?: number;
    frameRate?: string;
    height?: number;
    id?: string;
    key?: string;
    presetId?: string;
    rotate?: string;
    segmentDuration?: string;
    status?: string;
    statusDetail?: string;
    thumbnailEncryption?: Encryption;
    thumbnailPattern?: string;
    watermarks?: JobWatermark[];
    width?: number;
}
