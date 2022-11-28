import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal: string;

  @SpeakeasyMetadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;
}
