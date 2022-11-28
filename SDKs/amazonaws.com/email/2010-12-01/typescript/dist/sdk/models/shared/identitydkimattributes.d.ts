import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";
/**
 * Represents the DKIM attributes of a verified email address or a domain.
**/
export declare class IdentityDkimAttributes extends SpeakeasyBase {
    dkimEnabled: boolean;
    dkimTokens?: string[];
    dkimVerificationStatus: VerificationStatusEnum;
}
