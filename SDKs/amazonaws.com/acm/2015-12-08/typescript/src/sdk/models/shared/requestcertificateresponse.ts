import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RequestCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;
}
