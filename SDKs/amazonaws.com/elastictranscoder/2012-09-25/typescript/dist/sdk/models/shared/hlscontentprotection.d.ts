import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.
**/
export declare class HlsContentProtection extends SpeakeasyBase {
    initializationVector?: string;
    key?: string;
    keyMd5?: string;
    keyStoragePolicy?: string;
    licenseAcquisitionUrl?: string;
    method?: string;
}
