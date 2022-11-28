import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Limit
/** 
 * Information about an Elastic Load Balancing resource limit for your AWS account.
**/
export class Limit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  max?: string;

  @SpeakeasyMetadata()
  name?: string;
}
