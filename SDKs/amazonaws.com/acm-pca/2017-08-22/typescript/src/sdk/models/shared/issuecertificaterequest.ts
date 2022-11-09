import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiPassthrough } from "./apipassthrough";
import { SigningAlgorithmEnum } from "./signingalgorithmenum";
import { Validity } from "./validity";
import { Validity } from "./validity";


export class IssueCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApiPassthrough" })
  apiPassthrough?: ApiPassthrough;

  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=Csr" })
  csr: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=SigningAlgorithm" })
  signingAlgorithm: SigningAlgorithmEnum;

  @Metadata({ data: "json, name=TemplateArn" })
  templateArn?: string;

  @Metadata({ data: "json, name=Validity" })
  validity: Validity;

  @Metadata({ data: "json, name=ValidityNotBefore" })
  validityNotBefore?: Validity;
}
