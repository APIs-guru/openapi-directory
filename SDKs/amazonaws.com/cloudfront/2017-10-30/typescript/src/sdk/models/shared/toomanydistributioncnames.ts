import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TooManyDistributionCnamEs
/** 
 * Your request contains more CNAMEs than are allowed per distribution.
**/
export class TooManyDistributionCnamEs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
