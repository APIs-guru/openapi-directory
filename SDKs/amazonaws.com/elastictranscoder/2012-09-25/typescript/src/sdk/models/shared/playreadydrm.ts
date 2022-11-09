import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlayReadyDrm
/** 
 * <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
**/
export class PlayReadyDrm extends SpeakeasyBase {
  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=InitializationVector" })
  initializationVector?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=KeyMd5" })
  keyMd5?: string;

  @Metadata({ data: "json, name=LicenseAcquisitionUrl" })
  licenseAcquisitionUrl?: string;
}
