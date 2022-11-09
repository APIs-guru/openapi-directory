import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeSigning } from "./codesigning";
import { FileLocation } from "./filelocation";


// OtaUpdateFile
/** 
 * Describes a file to be associated with an OTA update.
**/
export class OtaUpdateFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=codeSigning" })
  codeSigning?: CodeSigning;

  @Metadata({ data: "json, name=fileLocation" })
  fileLocation?: FileLocation;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: number;

  @Metadata({ data: "json, name=fileVersion" })
  fileVersion?: string;
}
