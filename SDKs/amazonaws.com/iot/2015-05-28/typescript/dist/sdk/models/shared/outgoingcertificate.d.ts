import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A certificate that has been transferred but not yet accepted.
**/
export declare class OutgoingCertificate extends SpeakeasyBase {
    certificateArn?: string;
    certificateId?: string;
    creationDate?: Date;
    transferDate?: Date;
    transferMessage?: string;
    transferredTo?: string;
}
