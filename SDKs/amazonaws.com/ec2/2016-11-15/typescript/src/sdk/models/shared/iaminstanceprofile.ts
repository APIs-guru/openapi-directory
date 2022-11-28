import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IamInstanceProfile
/** 
 * Describes an IAM instance profile.
**/
export class IamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  id?: string;
}
