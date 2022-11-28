import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=connectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;
}
