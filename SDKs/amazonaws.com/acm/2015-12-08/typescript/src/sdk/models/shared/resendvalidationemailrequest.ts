import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResendValidationEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationDomain" })
  validationDomain: string;
}
