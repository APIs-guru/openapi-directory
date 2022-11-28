import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Encryption
/** 
 * The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
**/
export class Encryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitializationVector" })
  initializationVector?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyMd5" })
  keyMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: string;
}
