import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutProfileObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProfileObjectUniqueKey" })
  profileObjectUniqueKey?: string;
}
