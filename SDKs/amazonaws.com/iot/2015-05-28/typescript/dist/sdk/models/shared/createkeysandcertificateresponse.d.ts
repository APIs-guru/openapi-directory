import { SpeakeasyBase } from "../../../internal/utils";
import { KeyPair } from "./keypair";
/**
 * The output of the CreateKeysAndCertificate operation.
**/
export declare class CreateKeysAndCertificateResponse extends SpeakeasyBase {
    certificateArn?: string;
    certificateId?: string;
    certificatePem?: string;
    keyPair?: KeyPair;
}
