import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of an AcknowledgeThirdPartyJob action.
**/
export declare class AcknowledgeThirdPartyJobInput extends SpeakeasyBase {
    clientToken: string;
    jobId: string;
    nonce: string;
}
