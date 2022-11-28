import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelativeFileVersionEnumEnum } from "./relativefileversionenumenum";



// Location
/** 
 * Returns information about the location of a change or comment in the comparison between two commits or a pull request.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=filePosition" })
  filePosition?: number;

  @SpeakeasyMetadata({ data: "json, name=relativeFileVersion" })
  relativeFileVersion?: RelativeFileVersionEnumEnum;
}
