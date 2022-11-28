import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IamInstanceProfileSpecification
/** 
 * Describes an IAM instance profile.
**/
export class IamInstanceProfileSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  name?: string;
}
