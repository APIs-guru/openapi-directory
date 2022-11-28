import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";
/**
 * Represents the verification attributes of a single identity.
**/
export declare class IdentityVerificationAttributes extends SpeakeasyBase {
    verificationStatus: VerificationStatusEnum;
    verificationToken?: string;
}
