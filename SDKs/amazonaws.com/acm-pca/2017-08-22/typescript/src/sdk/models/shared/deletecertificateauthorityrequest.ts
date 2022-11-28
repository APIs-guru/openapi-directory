import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermanentDeletionTimeInDays" })
  permanentDeletionTimeInDays?: number;
}
