import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateOptions } from "./certificateoptions";



export class UpdateCertificateOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options: CertificateOptions;
}
