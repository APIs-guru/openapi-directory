import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutProfileObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfileObjectUniqueKey" })
  profileObjectUniqueKey?: string;
}
