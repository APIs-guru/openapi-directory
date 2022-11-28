import { SpeakeasyBase } from "../../../internal/utils";
import { ApiPassthrough } from "./apipassthrough";
import { SigningAlgorithmEnum } from "./signingalgorithmenum";
import { Validity } from "./validity";
export declare class IssueCertificateRequest extends SpeakeasyBase {
    apiPassthrough?: ApiPassthrough;
    certificateAuthorityArn: string;
    csr: string;
    idempotencyToken?: string;
    signingAlgorithm: SigningAlgorithmEnum;
    templateArn?: string;
    validity: Validity;
    validityNotBefore?: Validity;
}
