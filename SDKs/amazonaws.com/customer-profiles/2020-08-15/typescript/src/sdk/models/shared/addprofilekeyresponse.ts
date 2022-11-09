import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddProfileKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyName" })
  keyName?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
