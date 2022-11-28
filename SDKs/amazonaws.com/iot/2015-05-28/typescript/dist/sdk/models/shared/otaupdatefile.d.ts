import { SpeakeasyBase } from "../../../internal/utils";
import { CodeSigning } from "./codesigning";
import { FileLocation } from "./filelocation";
/**
 * Describes a file to be associated with an OTA update.
**/
export declare class OtaUpdateFile extends SpeakeasyBase {
    attributes?: Map<string, string>;
    codeSigning?: CodeSigning;
    fileLocation?: FileLocation;
    fileName?: string;
    fileType?: number;
    fileVersion?: string;
}
