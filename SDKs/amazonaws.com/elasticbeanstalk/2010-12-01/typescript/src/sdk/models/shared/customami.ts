import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomAmi
/** 
 * A custom AMI available to platforms.
**/
export class CustomAmi extends SpeakeasyBase {
  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  virtualizationType?: string;
}
