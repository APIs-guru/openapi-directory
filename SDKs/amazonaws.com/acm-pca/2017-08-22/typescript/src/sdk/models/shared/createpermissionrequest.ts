import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeEnum } from "./actiontypeenum";


export class CreatePermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions: ActionTypeEnum[];

  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=Principal" })
  principal: string;

  @Metadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;
}
