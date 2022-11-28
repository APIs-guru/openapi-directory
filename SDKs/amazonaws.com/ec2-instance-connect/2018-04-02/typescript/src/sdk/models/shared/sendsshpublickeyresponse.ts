import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;
}
