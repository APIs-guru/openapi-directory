import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImagePackage
/** 
 * Represents a package installed on an Image Builder image.
**/
export class ImagePackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=packageVersion" })
  packageVersion?: string;
}
