import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
**/
export declare class PlayReadyDrm extends SpeakeasyBase {
    format?: string;
    initializationVector?: string;
    key?: string;
    keyId?: string;
    keyMd5?: string;
    licenseAcquisitionUrl?: string;
}
