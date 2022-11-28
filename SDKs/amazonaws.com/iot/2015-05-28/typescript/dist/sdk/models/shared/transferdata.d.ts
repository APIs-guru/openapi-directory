import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data used to transfer a certificate to an Amazon Web Services account.
**/
export declare class TransferData extends SpeakeasyBase {
    acceptDate?: Date;
    rejectDate?: Date;
    rejectReason?: string;
    transferDate?: Date;
    transferMessage?: string;
}
