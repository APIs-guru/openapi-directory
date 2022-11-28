import { SpeakeasyBase } from "../../../internal/utils";
import { RevocationReasonEnum } from "./revocationreasonenum";
export declare class RevokeCertificateRequest extends SpeakeasyBase {
    certificateAuthorityArn: string;
    certificateSerial: string;
    revocationReason: RevocationReasonEnum;
}
