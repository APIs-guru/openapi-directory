import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterImageResult
/** 
 * Contains the output of RegisterImage.
**/
export class RegisterImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  imageId?: string;
}
