import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Encryption
/** 
 * The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
**/
export class Encryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitializationVector" })
  initializationVector?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=KeyMd5" })
  keyMd5?: string;

  @Metadata({ data: "json, name=Mode" })
  mode?: string;
}
