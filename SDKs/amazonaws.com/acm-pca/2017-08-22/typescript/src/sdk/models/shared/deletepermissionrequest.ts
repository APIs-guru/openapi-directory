import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=Principal" })
  principal: string;

  @Metadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;
}
