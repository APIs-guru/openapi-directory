import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImagePackage
/** 
 * Represents a package installed on an Image Builder image.
**/
export class ImagePackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=packageVersion" })
  packageVersion?: string;
}
