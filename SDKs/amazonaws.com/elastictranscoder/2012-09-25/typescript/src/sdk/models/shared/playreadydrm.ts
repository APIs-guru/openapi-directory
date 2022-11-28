import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlayReadyDrm
/** 
 * <p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>
**/
export class PlayReadyDrm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=InitializationVector" })
  initializationVector?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyMd5" })
  keyMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseAcquisitionUrl" })
  licenseAcquisitionUrl?: string;
}
