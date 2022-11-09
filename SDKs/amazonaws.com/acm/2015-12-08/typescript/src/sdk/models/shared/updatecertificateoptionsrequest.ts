import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateOptions } from "./certificateoptions";


export class UpdateCertificateOptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=Options" })
  options: CertificateOptions;
}
