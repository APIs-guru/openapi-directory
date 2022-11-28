import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiPassthrough } from "./apipassthrough";
import { SigningAlgorithmEnum } from "./signingalgorithmenum";
import { Validity } from "./validity";



export class IssueCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiPassthrough" })
  apiPassthrough?: ApiPassthrough;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=Csr" })
  csr: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm: SigningAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=TemplateArn" })
  templateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Validity" })
  validity: Validity;

  @SpeakeasyMetadata({ data: "json, name=ValidityNotBefore" })
  validityNotBefore?: Validity;
}
