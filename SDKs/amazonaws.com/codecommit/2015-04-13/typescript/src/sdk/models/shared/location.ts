import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelativeFileVersionEnumEnum } from "./relativefileversionenumenum";


// Location
/** 
 * Returns information about the location of a change or comment in the comparison between two commits or a pull request.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath?: string;

  @Metadata({ data: "json, name=filePosition" })
  filePosition?: number;

  @Metadata({ data: "json, name=relativeFileVersion" })
  relativeFileVersion?: RelativeFileVersionEnumEnum;
}
