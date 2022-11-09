import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=connectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;
}
