import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HlsContentProtection
/** 
 * The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.
**/
export class HlsContentProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitializationVector" })
  initializationVector?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyMd5" })
  keyMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyStoragePolicy" })
  keyStoragePolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseAcquisitionUrl" })
  licenseAcquisitionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Method" })
  method?: string;
}
