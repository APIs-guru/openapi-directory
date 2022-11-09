import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateId" })
  certificateId: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
