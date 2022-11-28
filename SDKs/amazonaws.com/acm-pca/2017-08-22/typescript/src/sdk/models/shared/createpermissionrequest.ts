import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";



export class CreatePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions" })
  actions: ActionTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal: string;

  @SpeakeasyMetadata({ data: "json, name=SourceAccount" })
  sourceAccount?: string;
}
