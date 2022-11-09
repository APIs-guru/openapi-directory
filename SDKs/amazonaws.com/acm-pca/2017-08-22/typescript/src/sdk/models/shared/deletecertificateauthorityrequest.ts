import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=PermanentDeletionTimeInDays" })
  permanentDeletionTimeInDays?: number;
}
