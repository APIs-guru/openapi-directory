import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendSerialConsoleSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Success" })
  success?: boolean;
}
