import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
**/
export declare class Encryption extends SpeakeasyBase {
    initializationVector?: string;
    key?: string;
    keyMd5?: string;
    mode?: string;
}
