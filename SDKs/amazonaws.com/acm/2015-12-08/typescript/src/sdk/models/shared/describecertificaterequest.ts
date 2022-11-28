import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;
}
