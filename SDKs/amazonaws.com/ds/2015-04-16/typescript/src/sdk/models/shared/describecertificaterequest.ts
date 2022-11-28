import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
