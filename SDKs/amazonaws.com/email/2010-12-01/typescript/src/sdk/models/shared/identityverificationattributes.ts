import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";



// IdentityVerificationAttributes
/** 
 * Represents the verification attributes of a single identity.
**/
export class IdentityVerificationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  verificationStatus: VerificationStatusEnum;

  @SpeakeasyMetadata()
  verificationToken?: string;
}
