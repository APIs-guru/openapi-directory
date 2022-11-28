import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddProfileKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
