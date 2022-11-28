import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateIamInstanceProfileSpecification
/** 
 * Describes an IAM instance profile.
**/
export class LaunchTemplateIamInstanceProfileSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  name?: string;
}
