import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResendValidationEmailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=Domain" })
  domain: string;

  @Metadata({ data: "json, name=ValidationDomain" })
  validationDomain: string;
}
