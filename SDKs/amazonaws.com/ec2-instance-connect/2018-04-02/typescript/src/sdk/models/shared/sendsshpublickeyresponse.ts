import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Success" })
  success?: boolean;
}
