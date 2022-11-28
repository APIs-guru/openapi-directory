import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * A certificate authority (CA) certificate for an account.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateArn?: string;

  @SpeakeasyMetadata()
  certificateIdentifier?: string;

  @SpeakeasyMetadata()
  certificateType?: string;

  @SpeakeasyMetadata()
  thumbprint?: string;

  @SpeakeasyMetadata()
  validFrom?: Date;

  @SpeakeasyMetadata()
  validTill?: Date;
}
