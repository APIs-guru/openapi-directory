import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidRelativePath
/** 
 * The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
**/
export class InvalidRelativePath extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
