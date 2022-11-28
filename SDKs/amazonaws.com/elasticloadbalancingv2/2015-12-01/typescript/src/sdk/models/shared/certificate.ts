import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * Information about an SSL server certificate.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateArn?: string;

  @SpeakeasyMetadata()
  isDefault?: boolean;
}
