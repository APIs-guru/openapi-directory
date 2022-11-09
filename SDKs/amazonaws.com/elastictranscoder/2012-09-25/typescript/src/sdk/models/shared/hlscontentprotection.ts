import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HlsContentProtection
/** 
 * The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.
**/
export class HlsContentProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitializationVector" })
  initializationVector?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=KeyMd5" })
  keyMd5?: string;

  @Metadata({ data: "json, name=KeyStoragePolicy" })
  keyStoragePolicy?: string;

  @Metadata({ data: "json, name=LicenseAcquisitionUrl" })
  licenseAcquisitionUrl?: string;

  @Metadata({ data: "json, name=Method" })
  method?: string;
}
