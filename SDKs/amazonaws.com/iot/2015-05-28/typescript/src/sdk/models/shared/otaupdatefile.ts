import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeSigning } from "./codesigning";
import { FileLocation } from "./filelocation";



// OtaUpdateFile
/** 
 * Describes a file to be associated with an OTA update.
**/
export class OtaUpdateFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=codeSigning" })
  codeSigning?: CodeSigning;

  @SpeakeasyMetadata({ data: "json, name=fileLocation" })
  fileLocation?: FileLocation;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: number;

  @SpeakeasyMetadata({ data: "json, name=fileVersion" })
  fileVersion?: string;
}
