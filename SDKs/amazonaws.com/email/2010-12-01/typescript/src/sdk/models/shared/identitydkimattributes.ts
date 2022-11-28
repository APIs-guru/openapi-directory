import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";



// IdentityDkimAttributes
/** 
 * Represents the DKIM attributes of a verified email address or a domain.
**/
export class IdentityDkimAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dkimEnabled: boolean;

  @SpeakeasyMetadata()
  dkimTokens?: string[];

  @SpeakeasyMetadata()
  dkimVerificationStatus: VerificationStatusEnum;
}
